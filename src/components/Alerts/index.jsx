import MyAlert from '../MyAlert';

const Alerts = ({success,successMsg,errors}) =>  {

        return (
            <div>
                {success && <MyAlert success>{successMsg}</MyAlert>}
                {errors && errors.map((error, index) => {
                    return <MyAlert key={index} index={index}>{error}</MyAlert>
                })}
            </div>
        );
    }

export default Alerts;