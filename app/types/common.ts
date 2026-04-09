export interface NavItem {
  label: string;
  href: string;
  target?: '_blank' | '_self';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}