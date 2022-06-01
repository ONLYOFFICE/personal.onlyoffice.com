import toastr from "../../components/toast/toastr";
const showToastr = (location, t) => {
  if (!location || !t || !location?.state?.toastr) return;
  if (location.state.toastr?.success) {
    toastr.success(location.state.toastr.text);
  }
  if (location.state.toastr?.error) {
    if (location.state.toastr?.isProviderError)
      toastr.error(t("ProviderNotConnected"));
    else toastr.error(location.state.toastr.text);
    location.state.toastr = null;
  }
};

export default showToastr;
