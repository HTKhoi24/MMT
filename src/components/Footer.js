import React, { Component } from 'react'
import '../css/footer.css'
export default class Footer extends Component {
    render() {
        return (
            <footer id="contact">
                <div className="row">
                    <p className="col-md-7">© 2019 Smartroom. All Rights Reserved | Design by <a className="vlth" href="https://www.facebook.com/groups/448536175642887/?ref=bookmarks">VLTH K16</a></p>
                    <div className="footer__icon col-md-5">
                        <a href="https://www.facebook.com/groups/448536175642887/?ref=bookmarks"><i className="fab fa-facebook-f" /></a>
                        <a href="https://www.facebook.com/groups/448536175642887/?ref=bookmarks"><i className="fab fa-twitter" /></a>
                        <a href="https://www.facebook.com/groups/448536175642887/?ref=bookmarks"><i className="fa fa-wifi" /></a>
                        <a href="https://www.facebook.com/groups/448536175642887/?ref=bookmarks"><i className="fab fa-vk" /></a>
                    </div>
                </div>

            </footer>
        )
    }
}
