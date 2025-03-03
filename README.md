# ip-address-fetch

A simple React hook to fetch the user's IP address.

## Installation

You can install the package via npm or yarn:

```bash
npm install ip-address-fetch
```
or
```bash
yarn add ip-address-fetch
```
## Code (Example): JavaScript

```javascript
import { useIpAddress } from 'ip-address-fetch';

const MyComponent = () => {
  const { ipAddress, loading, error } = useIpAddress();

  if (loading) return 'Loading..';
  if (error) return console.log(error);
  return <p>{ipAddress}</p>;
};
```