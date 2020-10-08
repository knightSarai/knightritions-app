import React from 'react';
import {v4 as uuid} from 'uuid';
import Slide from './Slide'

export default (slideImages, imgsRefs) => slideImages.map((img, idx) => {
    const setRef = element => {
        imgsRefs.push(element);
    }
        if (idx === 0) {
            return (
            <React.Fragment key={uuid()}>
                <Slide id="last-clone" ref={setRef} key={uuid()}  src={slideImages[slideImages.length - 1]} alt={`img-last-clone`}/>
                <Slide ref={setRef} key={uuid()}  src={img} alt={`img-${idx}`}/>
            </React.Fragment>)
        } else if (idx === (slideImages.length - 1)) {
            return (
            <React.Fragment key={uuid()}>
                <Slide ref={setRef} key={uuid()}  src={img} alt={`img-${idx}`}/>
                <Slide id="first-clone" ref={setRef} key={uuid()}  src={slideImages[0]} alt={`img-first-clone`}/>
            </React.Fragment>)
        } else {
            return (
                <Slide ref={setRef} key={uuid()}  src={img} alt={`img-${idx}`}/>
            )
        }
})
