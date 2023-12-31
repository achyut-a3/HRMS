import { axiosInstance } from "../../../auth/axiosInterceptor";

export const getEmployee = async () => {
  const data = await axiosInstance.get(`/employee`);
  return data;
};

export const addEmployee = async (formData) => {
  const data = await axiosInstance.post(`/employee`, formData);
  return data;
};
export const getEmployeeById = (id) => {
  const data = axiosInstance.get(`employee/${id}`);
  return data;
};

export const editEmployee = async (formData, id) => {
  const data = await axiosInstance.put(`/employee/${id}`, formData);
  return data;
};

export const getEmployeeByCompany = async () => {
  const data = await axiosInstance.get(`/employee/company/{companyId}`);
  return data;
};

export const getEmployeeByDesignation = async () => {
  const data = await axiosInstance.get(`/employee/position/{positionId}`);
  return data;
};

export const getEmployeeBydepartment = async () => {
  const data = await axiosInstance.get(`/employee/department/{departmentId}`);
  return data;
};
