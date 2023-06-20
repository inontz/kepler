"use client"
import { useState } from 'react'
import { Status } from './useLine'
import { liff } from "@line/liff";

interface UseLineInfoProps {
    liff: typeof liff | null;
    status: Status;
}

export const useLineInfo = ({ liff, status }: UseLineInfoProps) => {
    const [displayName, setDisplayName] = useState<string>('')
    const [pictureUrl, setPictureUrl] = useState<string>('')
    


    if (status !== "Initialized")
        return { profile: { displayName, pictureUrl }, version: '' }

    liff
        ?.getProfile()
        .then((profile: any) => {
            setDisplayName(profile.displayName)
            setPictureUrl(profile.pictureUrl)
        })
        .catch((err: any) => {
            console.error({ err })
        })

    const version = liff?.getVersion()

    return {
        profile: { displayName, pictureUrl },
        version,
    }
}