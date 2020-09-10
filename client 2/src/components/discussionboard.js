import React from "react"
function Discussion(){
return(
<div>
    <form>
        <div class="form-group">
        <label for="exampleFormControlInput1">Name/Username</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="John Smith"/>
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="JohnSmith@example.com"/>
        </div>
        <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
            <option>Suggest a Book</option>
            <option>Write a Review</option>
            <option>Post a local book event</option>
        </select>
        </div>
        <div class="form-group">
        <label for="exampleFormControlTextarea1">Tell us about it!</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        <button class="btn btn-primary" type="submit">Submit</button>
        <a class="btn btn-primary" href="#" role="button">See Book Suggestions!</a>
        <a class="btn btn-primary" href="#" role="button">Read Book Reviews!</a>
        </div>
    </form>
</div>
    
)    
}
export default Discussion