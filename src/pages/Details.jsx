import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchComments} from '../redux/actions/comments'

export const Details = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ comments }) => comments.comments);
    const isLoaded = useSelector(({ comments }) => comments.isLoaded);
    console.log(items)


    useEffect(() => {
        dispatch(fetchComments());
        console.log(items)
    }, []);

    console.log(items)



    return (
        <>
            <p></p>
            <h3 className="text-center" >Details</h3>
            {
                isLoaded ? items.map(item => {
                    <p>{item.name}</p>
                }) : (
                    <p>Loading...</p>
                )
                // items.map(item => {
                //     <div>
                //         <h2>Title: {item.name}</h2>
                //         <h3>Body: {item.body}</h3>
                //     </div> 
                // }
            }
        </>
    )
}