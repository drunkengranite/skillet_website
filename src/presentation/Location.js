/**
 * Created by drunkengranite on 7/10/17.
 */

import * as React from "react";

export const LocationBody = () => (
    <div className="location-container">
        <div className="map">
            <iframe
                title="omegalul"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800.0243085592106!2d-122.80565611736877!3d38.54785188890775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6a6c94f9aa5d3d!2sSkillets+Cafe!5e0!3m2!1sen!2sus!4v1497289403255"
            />
        </div>

        <div className="one">
            8776 Lakewood Dr
            <br />
            Windsor, Ca <br />
            95492 <br />
            <br />
            Located in the Raleys Shopping Center<br />
            <br />
            <br />
            Phone: 707-657-7599
            <br />
            Email: test@hotmail.com
            <br />
            <br />
            <br />
            Skillets Cafe only has one location, and are not affiliated
            <br />
            with any other restaurants with similar names.
        </div>
    </div>
);

export default LocationBody;
