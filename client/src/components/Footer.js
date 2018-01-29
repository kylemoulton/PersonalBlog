import React from 'react';

export default () => {
    return (
        <footer className="page-footer cyan darken-1 white-text">
            <div className="footer-copyright">
                <div className="container white-text">
                    @ 2018 Copyright Kyle Moulton
                    <div className="col l4 offset-l2 s12">
                        <ul style={{paddingBottom: "25px"}}>
                            <li><a style={{marginLeft: "25px"}} className="right amber-text" href="#!">Twitter</a></li>
                            <li><a className="right amber-text" href="#!">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}