import howToStyles from '../../styles/home.module.css'
import {Link} from "react-router-dom";


export function HowTo() {


    return <div className={howToStyles['howTo']}>
        <h1>How it works? <hr/></h1>

        <div className={howToStyles['steps']}>
            <div className={howToStyles['eachStep']}>
                <div className={howToStyles['step']}>
                    <div>1</div>
                    <p>Choose your preferred route and date on <Link to={'/transfers'}>Transfers</Link> page.</p>
                </div>
                <div className={howToStyles['step']}>
                    <div>2</div>
                    <p>Select your driver for the trip!</p>
                </div>
                <div className={howToStyles['step']}>
                    <div>3</div>
                    <p>Order!</p>
                </div>
            </div>
        </div>


        <div>
            <hr/>
            <h1>That's it!</h1>
        </div>

    </div>
}