// src/components/JobListings.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const JobListings = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching job listings:', error);
            }
        };
        fetchJobs();
    }, []);

    return (
        <Container className="my-5">
            <Row xs={1} md={2} lg={3} className="g-4">
                {jobs.map(job => (
                    <Col key={job._id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Title className="h5">{job.jobTitle}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{job.companyName} - {job.location}</Card.Subtitle>
                                <Card.Text className="text-truncate">{job.jobDescription}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between align-items-center">
                                <span className="badge bg-primary">{job.jobType}</span>
                                <Button variant="primary">Apply Now</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default JobListings;