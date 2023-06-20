"use client"
import { liff } from "@line/liff";
import { useEffect, useState } from "react"
// import { useEffect, useState } from "react"

export type Status = "OnLoad" | "Initialized" | "SignedIn"


export function InitLiff() {
    const [liffObject, setLiffObject] = useState<typeof liff | null>(null);
    const [status, setStatus] = useState<Status>("OnLoad")
    const [liffError, setLiffError] = useState<string | null>(null);

    const login = () => {
        liffObject?.login({})
    }

    const logout = () => {
        liffObject?.logout()
    }

    useEffect(() => {
        // to avoid `window is not defined` error
        import("@line/liff")
            .then((liff) => liff.default)
            .then((liff) => {
                console.log("LIFF init...");
                liff
                    .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! })
                    .then(() => {
                        console.log("LIFF init succeeded.");
                        setLiffObject(liff);
                    })
                    .then(() => {
                        if (liff.isLoggedIn()) setStatus("Initialized")
                        // setStatus("Initialized");
                    })
                    .catch((error: Error) => {
                        console.log("LIFF init failed.");
                        setLiffError(error.toString());
                    });
            });
    }, []);
    return {
        liffObject, status,
        login,
        logout,
    }
}

// export const useLine = () => {
//     const [liffObject, setLiffObject] = useState<typeof liff | null>(null)
//     const [status, setStatus] = useState<Status>("signin")

//     const login = () => {
//         liffObject?.login({})
//     };

//     const logout = () => {
//         liffObject?.logout()
//     };
//     useEffect(() => {
//         // if (status === "inited") {
//         //     return
//         // }
//         const liff = (await import("@line/liff")).default;

//             .then((liff) => liff.default)
//             .then(() => liff.ready)
//             .then(() => {
//                 console.log("LIFF init...");
//                 liff
//                     .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! })
//                     .then(() => {
//                         setLiffObject(liff)
//                         if (liff.isLoggedIn()) {
//                             setStatus('inited')
//                         }
//                     })
//                     .catch((error: Error) => {
//                         console.log("LIFF init failed.");
//                         // setLiffError(error.toString());
//                     });
//             });
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);
//     return {
//         liffObject,
//         status,
//         login,
//         logout,
//     }
// }
