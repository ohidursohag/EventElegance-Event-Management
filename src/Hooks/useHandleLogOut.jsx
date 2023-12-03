import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from "./useAuth";



const useHandleLogOut = () => {
   const { logOut } = useAuth()
   const handleLogOut = () => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You want to sign out?",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Confirm'
      }).then(async (result) => {
         const toastId = toast.loading('Logging Out ...');
         if (result.isConfirmed) {
            logOut()
               .then(() => {
                  toast.success('Logged Out Successfull', { id: toastId });
               })
               .catch(err => {
                  console.error(err.message);
                  toast.error(err.message, { id: toastId });
               })
         }
      })
   }
   return handleLogOut
}
export default useHandleLogOut;