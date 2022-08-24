import { bookBike } from "../../Database/Bookings/Bookings.collection"

export const BookaBike = (bookedBy)=>{
    return async (dispatch)=>{
        try{
            const isManager = await checkUserTypeByID(getState().user.token);
            if (isManager) throw new Error("Managers are not allowed to book a vechicle");
           
            await bookBike(by,for,upto);
            dispatch({ type: POST_BIKE_DATA });
            dispatch(
              showSuccessMessage(
                "Added Bike Success",
                data.name + " has been added successfully"
              )
            );
            dispatch(hideLoading());
        } catch (error) {
            ErrorHandle("Add Bike Data Error", error, dispatch);
            return false;
          }

        
    }
}