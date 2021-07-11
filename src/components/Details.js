import React, { Component } from 'react';
import { Media } from 'reactstrap';
import '../styles/Details.css';
import '../styles/Responsive.css';
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studs: [
                {
                    id: 0,
                    name: 'Akshaj G',
                    image: 'assets/images/akshaj.png',
                    roll_no: '20191CSE0019',
                    branch: 'CSE',
                    college: 'Presidency University',

                },
                {
                    id: 1,
                    name: 'Aswin Anilkumar',
                    image: 'assets/images/aswin.png',
                    roll_no: '20191ECE0092',
                    branch: 'ECE',
                    college: 'Presidency University',

                },
                {
                    id: 2,
                    name: 'Darshan C D',
                    image: 'assets/images/darshan.png',
                    roll_no: '20191CSE0058',
                    branch: 'CSE',
                    college: 'Presidency University',

                },
                {
                    id: 3,
                    name: 'Mohammed Affan',
                    image: 'assets/images/affan.png',
                    roll_no: '20191ISE0021',
                    branch: 'ISE',
                    college: 'Presidency University',

                },
                {
                    id: 4,
                    name: 'Jagin',
                    image: 'assets/images/jagin.png',
                    roll_no: '20191MEC0052',
                    branch: 'MEC',
                    college: 'Presidency University',

                },
                
            ],
        };
    }

    render() {
        const details = this.state.studs.map((stud) => {
            return (
                <div key={stud.id} className="col-12 mt-4">
                    <div id={"x_" + stud.roll_no}>
                        <Media tag="li">
                            <Media left middle>
                                <Media object src={stud.image} alt={stud.name} />
                            </Media>
                            <Media body className="p-2">
                                <Media heading>{stud.name}</Media>
                                <p>Roll No: {stud.roll_no}</p>
                                <p>Branch: {stud.branch}</p>
                                <p>College: {stud.college}</p>
                            </Media>
                        </Media>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {details}
                    </Media>
                </div>
            </div>
        );
    }


}

export default Details;