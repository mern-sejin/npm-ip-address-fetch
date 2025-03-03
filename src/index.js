import { useEffect, useState } from 'react';
/**
 * Fetches the user's IP address from the API.
 * @returns { Promise<{ ip: string }> } The IP address.
*/
const fetchIpAddress = async () => {
    const getIpAddress = await fetch('https://api.ipify.org?format=json');
    const response = await getIpAddress.json();
    return response;
};
/**
 * Custom hook to fetch the IP address.
 * @returns { Object } The hook result.
 * @returns { string | null } ipAddress The user's IP address.
 * @returns { boolean } loading Loading state of the IP address.
 * @returns { Error | null } error Error state if there was an issue.
*/
export const useIpAddress = () => {
    const [ipAddress, setIpAddress] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchIpAddress()
        .then(ip => {
            setIpAddress(ip);
            setLoading(false);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        })
    }, []);
    return { ipAddress, loading, error };
};