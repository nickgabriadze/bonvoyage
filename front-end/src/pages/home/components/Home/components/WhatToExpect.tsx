import expectStyles from './../../styles/home.module.css'
import PaymentSVG from '/icons/homepage/payment.svg'
import CarSVG from '/icons/homepage/car.svg'
import CommunicationSVG from '/icons/homepage/communication.svg'
import WaterDropSVG from '/icons/homepage/water-drop.svg'
import CameraSVG from '/icons/homepage/camera.svg'
import FreeCancellationSVG from '/icons/homepage/free-cancellation.svg'
import CustomerSupportSVG from '/icons/homepage/support.svg'
import BookmarkHeartSVG from '/icons/homepage/bookmark-heart.svg'


export function WhatToExpect() {


    return <div className={expectStyles['whatToExpect']}>
        <div>
            <h1>What to expect</h1>
            <hr/>
        </div>

        <div className={expectStyles['features']}>
            <div className={expectStyles['feature-box']}>
                <img src={PaymentSVG} width={24} alt={'Payment icon'}/>
                <p>Zero hidden fees, no credit card required.</p>
            </div>

            <div className={expectStyles['feature-box']}>
                <img src={CarSVG} width={24} alt={'Car icon'}/>
                <p>Clean and well-maintained car.</p>
            </div>


            <div className={expectStyles['feature-box']}>
                <img src={CommunicationSVG} width={30} alt={'Communication icon'}/>
                <p>Polite and respectful driver.</p>
            </div>

            <div className={expectStyles['feature-box']}>
                <img src={WaterDropSVG} width={24} alt={'Water drop icon'}/>
                <p>Always available water bottle.</p>
            </div>

            <div className={expectStyles['feature-box']}>
                <img src={CameraSVG} width={24} alt={'Camera icon'}/>
                <p>Ability to stop anywhere for a quick picture.</p>
            </div>


            <div className={expectStyles['feature-box']}>
                <img src={FreeCancellationSVG} width={24} alt={'Calendar event cancellation icon'}/>
                <p>Cancel anytime, no questions asked.</p>
            </div>

            <div className={expectStyles['feature-box']}>
                <img src={CustomerSupportSVG} width={24} alt={'Customer support icon'}/>
                <p>24/7 support for any question.</p>
            </div>


            <div className={expectStyles['feature-box']}>
                <img src={BookmarkHeartSVG} width={24} alt={'Bookmark heart icon'}/>
                <p>Exciting trip that will turn into a special memory.</p>
            </div>


        </div>

    </div>
}