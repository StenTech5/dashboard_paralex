import axios from "axios";
import { ADMIN_LOGIN_URL, BASE_URL, MGT_LOGIN_URL } from "../utils/constants";
import { getAdminToken } from "./authHelpers";

const timeoutTime = 25 * 1000; //25 seconds

// Configure admin and user baseUrl for all requests
const adminApi = axios.create({
    baseURL: BASE_URL
});

// Admin-specific interceptors

// Admin - Request interceptor for adding (admin) token
adminApi.interceptors.request.use((config) => {
    const adminToken = getAdminToken();
    if (adminToken) {
        config.headers['Authorization'] = `Bearer ${adminToken}`;
    }
    return config;
}, (error) => Promise.reject(error));

// Admin - Response interceptor for handling (admin) token expiry
adminApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
            localStorage.removeItem("adminToken");
            window.location.href = `${ADMIN_LOGIN_URL}?message=admin-session-expired`;   //Redirect with message                
            
        }
        return Promise.reject(error);
    }
)

/** handleAdminRequest - to handle every admin related api request */
const handleAdminRequest = async(method, url, data=null, timeout=timeoutTime) => {
    try {
        const response = await adminApi({ method, url, data, timeout });
        return response.data;
    } catch (error) {
        handleRequestError(error);
    }
}

/** handleRequestError - Generic error handler for request handler functions (handleAdminRequest function and handleUserRequest function) */
const handleRequestError = (error) => {
    // If any API error (from backend api )
    if(error.response) {
        throw {
            success: false,
            status: error.response.status,
            error: error.response.data?.error || "An error occurred",
            errors: error.response.data?.errors || []
        }
    } else if (error.code === "ECONNABORTED"){
        const err = new Error("Request Timed out. Please try again later.");
        throw { success: false, error: err.message, errors: [ err.message ]}
    } else {
        throw { success: false, error: "Something went wrong. Please try again later!"}
    }
}

// === LIST OF ALL API ENDPOINTS  === //

// === USER-Related Endpoints === //

//=== ADMIN Related Endpoints ===//

/** getAdminNotifications */
export const getAdminNotifications = async (pageNum=1, limit=15) => {
    return handleAdminRequest('GET', `api/v1/admin/notifications?page=${pageNum}&limit=${limit}`);
}

/** handleAdminLogin - API request handler function that handles admin login */ 
export const handleAdminLogin = async (formData) => {
    return handleAdminRequest('POST', 'api/v1/admin/login', formData);
}


/** handleAdminForgotPassword  */
export const handleAdminForgotPassword = async (formData) => {
    return handleAdminRequest('POST', 'api/v1/admin/forgot-password', formData);
}

/** resetAdminPassword  */
export const resetAdminPassword = async (formData) => {
    return handleAdminRequest('PUT', 'api/v1/admin/reset-password', formData);
}
/** updateAdminPassword  */
export const updateAdminPassword = async (formData) => {
    return handleAdminRequest('PUT', 'api/v1/admin/update-password', formData);
}
/** resetUserpassword */
export const adminResetUserPassword = async (formData) => {
    return handleAdminRequest('PUT', 'api/v1/admin/reset-user-password', formData);
}

export const handleAddUser = async (formData) => {
    return handleAdminRequest('POST', 'api/v1/admin/add-user', formData);
}

export const uploadUsers = async (formData) => {
    return handleAdminRequest('POST', 'api/v1/admin/upload-users', formData);
}

export const updateUser = async (formData) => {
    return handleAdminRequest('PUT', 'api/v1/admin/update-user', formData);
}

export const deleteUser = async (formData) => {
    return handleAdminRequest('POST', 'api/v1/admin/delete-user', formData);
}

/** Admin Get Users */
export const adminGetUsers = async (pageNum=1, limit=15) => {
    return handleAdminRequest('GET', `api/v1/admin/users?page=${pageNum}&limit=${limit}`)
}

/** Admin Search Users */
export const adminSearchUsers = async (searchTerm, pageNum=1, limit=15) => {
    return handleAdminRequest('GET', `api/v1/admin/search-users?searchTerm=${searchTerm}&page=${pageNum}&limit=${limit}`)
}





