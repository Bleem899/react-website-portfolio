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
          <p><Icon name='dropdown' />Circuits</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0} className="accordion-dropdown">
          <p>
            An introduction to the fundamental concepts of electrical circuits, 
            including circuit variables, elements, and simple resistive circuits;
            circuit laws and network theorems; op-amps; inductance; capacitance; 
            natural and step responses of RL, RC, and RLC circuits. 
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />Statics</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1} className="accordion-dropdown">
          <p>
            Equilibrium states are studied by analyzing the forces and torques 
            on both two- and three-dimensional rigid bodies. Topics include:
            structural analysis, internal forces, and friction.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />Quantum Mechanics</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2} className="accordion-dropdown">
          <p>
            An introduction to the concepts and formalism of quantum mechanics. 
            The focus will be the time-independent Schrödinger equation
            and its application to systems such as the harmonic oscillator, 
            square-well potentials, and the hydrogen atom.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />Thermodynamics</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3} className="accordion-dropdown">
          <p>
            A study of the basic principles of classical thermodynamics and 
            statistical mechanics including thermal equilibrium; first, second, and
            third laws of thermodynamics; entropy; partition functions; 
            and statistical ensembles. Applications to engines, refrigerators 
            and others will be considered.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />Classical Mechanics</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4} className="accordion-dropdown">
          <p>
            A study of the fundamentals of mechanics, including Newtonian dynamics 
            and conservation laws, oscillations, central force motion,
            the calculus of variations, generalized coordinates, Lagrangian dynamics, 
            and Hamiltonian dynamics.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />Modern Physics</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5} className="accordion-dropdown">
          <p>
            An introduction to the basic principles of 20th-century physics. 
            Topics typically include special relativity, particle properties of
            electromagnetic radiation, wave properties of particles, the 
            uncertainty principle, and atomic spectra. Lecture three hours, laboratory
            three hours per week. 
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />University Physics I, II</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6} className="accordion-dropdown">
          <p>
            Introductory courses in physics using calculus, designed for the 
            physical science and engineering majors. Lecture three hours,
            laboratory two hours per week.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 7}
          index={7}
          onClick={this.handleClick}
          className="accordion-classes"
        >
          <p><Icon name='dropdown' />General Chemistry I, II</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7} className="accordion-dropdown">
          <p>
            An introduction to the field of chemistry including nomenclature, 
            stoichiometry, atomic structure, bonding, behavior of gases, nuclear
            processes, solids and liquids, chemical equilibria, electrochemistry, 
            thermodynamics, and kinetics. Lecture three hours, laboratory three hours per week.
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}