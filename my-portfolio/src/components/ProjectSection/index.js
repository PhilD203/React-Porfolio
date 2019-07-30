import React from 'react';
import './style.css';
import Media from 'react-bootstrap/Media';

class ProjectSection extends React.Component {

    render() {
        return (
            <ul className="list-unstyled">
                <Media as="li">
                    <img
                        width={128}
                        height={128}
                        className="mr-3"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKaOfrGfm2Xmpl_0J8Nz-jyZi9k15J8Tu5kV-DL2CSD04kDYv"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>WollyBully</h5>
                        <p>
                        A modern reminder application in which client is “bullied” if they do not complete a goal by a certain time. As one of the backend developers on this project I was in charge of creating a RESTful API, controllers, and models.
                        </p>
                        <p> Node.js, JavaScript, JQuery, MySQL, Express, Node-Cron, Twilio, Materialize</p>
                    </Media.Body>
                </Media>

                <Media as="li">
                    <img
                        width={128}
                        height={128}
                        className="mr-3"
                        src="https://d172h4vc197skd.cloudfront.net/images/c6/0e/c60edb9bc1efef8989f580a0e8406e0a_31277dad2b2_t.png"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5> Basic Chicago Beaches</h5>
                        <p>
                        A web based application that allows the client to select which popular beach they want to attend based on water quality, current weather conditions, and restaurants nearby. As the person in charge of the front end I was responsible for displaying and formatting the information to allow for an accessible and appealing client experience.
                        </p>
                        <p> JavaScript, JQuery, AJAX, Firebase, Foundation</p>
                    </Media.Body>
                </Media>

                <Media as="li">
                    <img
                        width={128}
                        height={128}
                        className="mr-3"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEXw208yMzD14FAkJy+hlUAVHC4qLS/p1U765FFyazjm0k2ZjT+dkUATGi0oKy/03lB8dDqBeDscIi4YHi6qnELJuEhBQDLbyUu+rkUAACsvMDBtZjh3bzmShz4zNDAPGC0ACCxWUjQADy22p0RiXDb/61JIRjNDQjLCsUY8PDFeWTWMgj3PvknWxEqwl3jCAAADCElEQVR4nO3ba1uiQBiAYR0ExgNgVKZjVuta1tb+/7+3JHp5YGaUSmHY5/64vUs81wgSSqsFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADOTRglJWZLDRdnzykcdEzGhT0xz5Ya/n3RxN6TZ3B9Lw6HjbOlhtOpvExbrue3DYJhYacj02yp4aBb30LjbKnhmhYKKUViKbx6lnL/8HKsUAy7mcBYqF663en+GcRSWFjvagrj3UK5jIPAHJglBkHa2dtzx9ZQvihLXs6rd2HsH5p3dYVBYc73U11hOCkOVlkY91thwXokO8nI53VhMNXM3eWJ3k12ttmebopzyUOFhd7AePSLq7jdfti8wjTv1snuKz29NV+wyCrX8FihshTuHsvK2cJ895WKtYVR9hPX13AVuByN3orXn9k21Gi0fFPuFwafJxLtWPbv8jV1vzC27VgypnCnsIqrNtbQXpgkSbOPw3A8Hr/24wYX9iZpmsYNeD80F7p+1Tb08ztI/rHCIBuaO1iYvN6s6fZdCCHDfBvBfTbTuTP/rroWfp4pc5qfidls1n/PX8ZeR+qHNmpbaCNjL47Xx+nB3/iaYScLt+eYphcGaTo/tg3nCj8/ZHneBE7/fnxYTjIrdb0uNRHvfxaLxaZwKK0nmRXX1lB2ve0tVM1dfc3/cK5w5w5x3OhCFUXR/JRjy6XC1S3U+7xQLaXhcuCQQ4ViMHl8fNws4ejUHXapsONtD8GGFyqlgrcmF6pfmUWTC/2W6RaqjkPXNNvC8PjwlpNrSOEeCs+DQi0KDSg8Dwq1KDT4jwoduC4dzK9XJk1dw1bvbq3U73KpsGX5sMbMqcIvofA8KPxJssrvl7a96JDlNrYYTPIZy7tFOClsMapyDTUsH7ac9I7v5BMlGycV1u2b7EWWj5O+W1iT5y2av4YUHiuszZnG/Jig7ivdOTGI8pknS2Fdnj8MZ30T86Oeye16ZGbZsmXDFz3TfO1x3WQz86UNXzYQAAAAP+Qf46hCnEKfoXQAAAAASUVORK5CYII="
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>The Entertainer</h5>
                        <p>
                        A command line node app that takes in parameters and gives you back data.
                        </p>
                        <p> Node.js, JavaScript, Inquirer, Axios, Moment, Figlet  </p>
                    </Media.Body>
                </Media>
                <Media as="li">
                    <img
                        width={128}
                        height={128}
                        className="mr-3"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIiLnNwgfnwINiarYRcDpACVlOegDUgSd1cHnkwQni0_aRj4Hlw"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Galaxy Click</h5>
                        <p>
                        
                        </p>
                    </Media.Body>
                </Media>
            </ul>

        )
    }

}

export default ProjectSection;