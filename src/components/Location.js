/**
 * Created by drunkengranite on 6/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Footer from './Footer'

import Section from './Section'

import image from '../location.png'

const Location = (props) => {

    return (
        <div id="body">
            <div id="content">
                <Section valueImage={image} />
            </div>
            <Footer/>
        </div>
    )
};


export default connect(
    (state) => ({

    }),
    (dispatch) => ({

    })
)(Location)