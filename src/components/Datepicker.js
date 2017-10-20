import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
// if you want to add new language, just open node_modules/moment/locale/ and find lang which you need.
import 'moment/locale/es'
import 'moment/locale/pl'
import 'moment/locale/en-gb'
// styles for calendar
import './Datepicker.css';


export default class Datepicker extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return <div>
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                dateFormat="LLL"
                locale={this.props.language}
            />
        </div>
    }
}


