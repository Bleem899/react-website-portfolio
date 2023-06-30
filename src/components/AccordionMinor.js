import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import './Accordion.css'


export default class MyAccordion extends Component {
  state = { activeIndex: 10 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion className="accordion-items">
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />Data Structures</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0} className="accordion-dropdown">
          <p>
            Study of ADTs and their common implementations: searchable collections 
            (BSTs and self-balancing trees), priority queues (heaps), maps
            (hash tables), and graphs (adjacency list/matrix). Emphasis on 
            choosing an implementation based on algorithmic analysis and 
            properties of a particular application. Also includes generics, 
            recursion, and advanced sorting.  
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />Software Engineering</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1} className="accordion-dropdown">
          <p>
            Study of the methods used in the design, development, implementation, 
            testing and maintenance of software systems. Students will
            utilize the team approach in the development and management of 
            software projects and will make use of modern tools to achieve
            these tasks.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />Artificial Intelligence</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2} className="accordion-dropdown">
          <p>
            Overview of the field, with specific attention to game AI. 
            Includes considerations for building believable non-player characters 
            (NPCs) using state models and behavior trees, path planning, 
            and decision making, learning and rule-based systems. May also include
            procedural content generation.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />Programming Languages</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3} className="accordion-dropdown">
          <p>
            Comparison of the organization and structure of procedural, 
            object-oriented, functional, declarative, and scripting languages. 
            Additional topics will include language translation, abstraction 
            mechanisms, language design, and semantics
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />Programming I, II</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4} className="accordion-dropdown">
          <p>
            Introduction to the fundamental concepts of programming using 
            an object-oriented language. Topics include selection, repetition,
            methods, and problem solving; introduction to arrays, strings, and 
            simple class design. Includes a laboratory component; Concentrates on 
            object-oriented development (encapsulation, aggregation, inheritance,
            polymorphism, interfaces) and elementary data structures 
            (resizable arrays, linked lists, stacks, queues). Also includes 
            introductions to recursion, algorithm analysis, searching, and sorting. 
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />Probability and Statistics</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5} className="accordion-dropdown">
          <p>
            Counting techniques, probability, odds, mathematical 
            expectation, distributions, moments, sampling, mathematical 
            models and testing hypotheses.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />Calculus I, II, III</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6} className="accordion-dropdown">
          <p>
            Study of calculus and analytic geometry, 
            including differentiation, application of derivatives, 
            integration, application of integrals, transcendental functions, techniques of integration, 
            sequences and series, polar coordinates, vectors, 
            vector-valued functions, functions of multiple variables, 
            including partial differentiation and multiple integrals.
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}