import {Link} from "react-router-dom";
import './global.css'

export default function NotFound() {

    document.body.style.backgroundColor = 'var(--color-main-deep-sea-navy-lighter)'

    return <div style={
        {
            fontSize: 'var(--font-size-l)',
            color: 'var(--color-main-deep-sea-navy)',
            textAlign: 'center',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
        <h1 style={{
            fontFamily: 'Dancing Script, sans-serif',
            padding: '20px'
        }}> Page you might be
            looking for doesnt exist!</h1>
        <Link to={'/'}
              className='go-back-home'
        >Return to home</Link>

    </div>
}