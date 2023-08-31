import Swal from 'sweetalert2';

export const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  GUEST: 'GUEST',
};

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const showDialog = (title, text, icon) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    timer: 1500,
    showCancelButton: false,
    showConfirmButton: false,
  });
};
