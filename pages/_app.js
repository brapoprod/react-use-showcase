import { Reboot } from 'styled-reboot';

import '../utils/reset.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Reboot />
            <Component {...pageProps} />
        </>
    );
}
