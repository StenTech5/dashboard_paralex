import axios from "axios";
import { ADMIN_LOGIN_URL, BASE_URL } from "../utils/constants";
import { getAdminToken } from "./authHelper";

const timeoutTime = 100 * 1000; //25 seconds

// Configure admin and user baseUrl for all requests
const adminApi = axios.create({
    baseURL: BASE_URL
});

// Admin-specific interceptors

// Admin - Request interceptor for adding (admin) token
adminApi.interceptors.request.use((config) => {
    const adminToken = getAdminToken();
    console.log("Admin Token" , adminToken);
    if (adminToken) {
        config.headers['Authorization'] = `Bearer ${adminToken}`;
    }
    return config;
}, (error) => Promise.reject(error));

// Admin - Response interceptor for handling (admin) token expiry
adminApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 ) {
            localStorage.removeItem("adminToken");
            // window.location.href = `${ADMIN_LOGIN_URL}?message=admin-session-expired`;   //Redirect with message                
            window.location.href = `?message=admin-session-expired`;   //Redirect with message                
            
        }
        return Promise.reject(error);
    }
)

/** handleAdminRequest - to handle every admin related api request */
const handleAdminRequest = async(method, url, data=null, timeout=timeoutTime) => {
    try {
        const response = await adminApi({ method, url, data });
        return response.data;
    } catch (error) {
        handleRequestError(error);
    }
}

/** handleRequestError - Generic error handler for request handler functions (handleAdminRequest function and handleUserRequest function) */
const handleRequestError = (error) => {
    // If any API error (from backend api )
    console.log("Error ", error);
    if(error.response) {
    console.log("Error ", error);

        throw {
            success: false,
            status: error.response?.status || 400,
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
    return handleAdminRequest('POST', 'admin/login', formData);
}

/** Admin Get Users */
export const adminGetUsers = async (pageNum=1, limit=15) => {
    return handleAdminRequest('GET', `admin/get-all-users?pageNumber=${pageNum}&pageSize=${limit}`)
}

/** Admin Get Lawyers */
export const adminGetLawyers = async (pageNum=1, limit=15) => {
    // return handleAdminRequest('GET', `service-provider/lawyer/profile/?pageNumber=${pageNum}&pageSize=${limit}`)
    return handleAdminRequest('GET', `admin/get-all-lawyers-profile?pageNumber=${pageNum}&pageSize=${limit}`)
}

/** Admin add Lawyers */
export const adminAddLawyer = async (formData) => {
    return handleAdminRequest('POST', 'admin/create-lawyer-profile', formData);
}

/** Admin Get Bailbond */
export const adminGetBailBonds = async () => {
    return handleAdminRequest('GET', 'admin/get-bail-bond-requests')
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


/** Admin Search Users */
export const adminSearchUsers = async (searchTerm, pageNum=1, limit=15) => {
    return handleAdminRequest('GET', `api/v1/admin/search-users?searchTerm=${searchTerm}&page=${pageNum}&limit=${limit}`)
}





