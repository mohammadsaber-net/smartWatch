import { schema } from "./validation";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
function Booking() {
    const {
        register,
        handleSubmit,
        formState:{errors,isValid},
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
    });
    
    const onSubmit = (data) => {
        let message=` رسالة حجز من موقعك
        الاسم:${data.name}
        الاميل:${data.email}
        الهاتف:${data.phone}
        تاريخ الحجز:${data.date.getDate()}/${data.date.getMonth() + 1}/${data.date.getFullYear()}
        `
    let phone="+201023966702"
    const url =(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`)
    window.open(url,"_blank")
  };
    return (
        <div id="booking" className="py-10 md:py-16 bg-gray-50 md:pt-8 m-auto container">
            <h2 className="main-title text-center">احجز الآن</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-8">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm text-right font-medium text-gray-700">الاسم</label>
                    <input {...register("name")} type="text" id="name" placeholder="يرجي كتابة الاسم بالعربي" className="mt-1 block text-right w-full border focus:outline-none focus:border-blue-500 border-gray-300 rounded-md p-2" />
                    {errors.name&&<small className="block text-red-500">{errors.name.message}</small>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm text-right font-medium text-gray-700">البريد الإلكتروني</label>
                    <input {...register("email")} type="email" id="email" placeholder="يرجي كتابة البريد الإلكتروني" className="mt-1 block w-full border focus:outline-none focus:border-blue-500 border-gray-300 rounded-md p-2" />
                    {errors.email&&<small className="text-red-500 block">{errors.email.message}</small>}
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm text-right font-medium text-gray-700">رقم الهاتف</label>
                    <input {...register("phone")} type="tel" id="phone" placeholder="يرجي كتابة رقم الهاتف" className="mt-1 block w-full border focus:outline-none focus:border-blue-500 border-gray-300 rounded-md p-2" />
                    {errors.phone&&<small className="text-red-500 block">{errors.phone.message}</small>}
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm text-right font-medium text-gray-700">تاريخ الحجز</label>
                    <input {...register("date")} type="date" id="date" className="mt-1 block text-right w-full border focus:outline-none focus:border-blue-500 border-gray-300 rounded-md p-2" />
                    {errors.date&&<small className="text-red-500 block">{errors.date.message}</small>}
                </div>
                <button disabled={!isValid} type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">احجز الآن</button>
            </form>
        </div>
    );
}
export default Booking;