export default class NotificationsService {
  static async confirmAction(title = 'Are you sure?') {
    try {
      // @ts-ignore
      const res = await Swal.fire({
        title: title,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      console.log(res)
      if (res.isConfirmed) {
        return true
      }
      return false
    } catch (error) {
      console.error(error)
    }
  }


  static toast(title = 'Default Toasty', display = 'success') {
    // @ts-ignore
    Swal.fire({
      title: title,
      icon: display,
      position: 'top-right',
      timer: 3000,
      toast: true,
      showConfirmButton: false
    })
  }
}