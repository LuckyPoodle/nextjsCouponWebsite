import { useRef, useState } from 'react';
import classes from '../styles/Redeembox.module.css'

function RedeemBox(props) {
    const [isInvalid, setIsInvalid] = useState(false);

    const codeInputRef = useRef();


    function sendCommentHandler(event) {
        event.preventDefault();

        const enteredCode = codeInputRef.current.value;


        if (
            !enteredCode ||
            enteredCode.trim() === ''
        ) {
            setIsInvalid(true);
            return;
        }

        props.onAddComment({
            code: enteredCode,

        });
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={sendCommentHandler}>
                <div className={classes.row}>
                    <div className={classes.control}>
                        <label htmlFor='code'>Enter Postal Code</label>
                        <input type='text' id='code' ref={codeInputRef} />
                    </div>
                </div>

                {isInvalid && <p>Please enter a valid postal code!</p>}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default RedeemBox;
