import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponnent from "./AddComponnent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJobs
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run didupdate: ', 'prev state: ', prevState, ' current state: ', this.state)
    }
    componentDidMount() {
        console.log('>>> run componnent did mount')
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponnent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;