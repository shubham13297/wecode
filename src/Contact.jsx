import React from 'react';
const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className='text-center'>
                    Contact Us
                </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <div class="mb-3">
                            <label for="fname" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="fname" placeholder="Enter Your Full Name" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter Your Email" />
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone</label>
                            <input type="text" class="form-control" id="phone" placeholder="Enter Your Phone" />
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" id="message" rows="3"></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;