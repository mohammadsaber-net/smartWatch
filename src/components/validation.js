import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().matches(/^[ا-ي]+(?: [ا-ي]+)*$/, 'الاسم يجب أن يكون باللغة العربية').required('الاسم مطلوب'),
  email: yup.string().email('البريد الإلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
  phone: yup.string().matches(/^\d{10}$/, 'رقم الهاتف يجب أن يتكون من 10 أرقام').required('رقم الهاتف مطلوب'),
  date: yup.date().required('تاريخ الحجز مطلوب').nullable(),
});
