import { Workbox } from "https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-window.prod.mjs";

const registerSW = () => {
  const wb = new Workbox(`/sw.js`);

  if (wb) {
    const showSkipWaitingPrompt = (event) => {
      console.log(
        `A new service worker has installed, but it can't activate` +
          `until all tabs running the current version have fully unloaded.`
      );

      function refresh() {
        wb.addEventListener("controlling", () => {
          localStorage.removeItem("sw_need_activation");
          window.location.reload();
        });

        wb.messageSkipWaiting();
      }

      try {
        if (localStorage.getItem("sw_need_activation")) {
          refresh();
          return;
        }

        localStorage.setItem("sw_need_activation", true);
      } catch (e) {
        console.error("showSkipWaitingPrompt", e);
        refresh();
      }
    };

    wb.addEventListener("waiting", showSkipWaitingPrompt);

    wb.register()
      .then((reg) => {
        console.log("Successful service worker registration (site)", reg);
      })
      .catch((err) => console.error("Service worker registration failed", err));
  }
};

window.SW = {
  registerSW: registerSW,
};
registerSW();
