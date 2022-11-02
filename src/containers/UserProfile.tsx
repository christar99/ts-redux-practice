import { asyncUpFetch } from "../api/github";
import { useAppDispatch, useAppSelector } from "../modules";

function UserProfile () {
    const dispatch = useAppDispatch();
    const info: string = JSON.stringify(useAppSelector(state => state.github.info));

    const getUser = async () => dispatch(asyncUpFetch.getUserProfile('christar99'));
    return(
        <>
            <button onClick={getUser}>깃허브정보 가져오기</button>
            <div>
                {info}
            </div>
        </>
    )
}

export default UserProfile;