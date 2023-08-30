# Step-1 Web App README

Welcome to **Step-1** – a captivating and interactive mobile game designed to bring excitement, competition, and collaboration to your social gatherings. Engage in a series of thrilling tasks and missions across three unique stages, earn points, and emerge as the ultimate winner. This README provides an overview of the game, its impressive features, and the architectural insights that power this immersive experience.

## Table of Contents

- [Introduction](#introduction)
- [Game Instructions](#game-instructions)
- [Important Components](#important-components)
- [Architectural Overview](#architectural-overview)
- [User Pilot](#user-pilot)
- [Feedback and Improvements](#feedback-and-improvements)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**Step-1** is not just a game; it's an experience that brings people closer, encourages friendly competition, and captures moments worth remembering. With a carefully crafted combination of secret missions, survival challenges, punishment tasks, and group collaborations, Step-1 keeps participants engaged and entertained from start to finish.

Website: [Step-1](https://itaybober.github.io/step-one/)
GitHub: [Step-1 GitHub Repository](https://github.com/itaybober/step-one)

## Game Instructions

### Set Up

1. Create an anonymous user profile.
2. The host initiates a new game, customizing filters according to preferences.
3. Players use a pin to connect to the same game on the Covenant Page.
4. All players place a finger on the host's phone to start the game.

### The Game

- Embark on rounds with secret, survival, punishment, and group missions.
- Complete secret missions for confidential objectives and points.
- Engage in fierce survival missions for competitive glory.
- Conquer punishment missions if you're the lowest scorer in survival.
- Collaborate in group missions for cooperative tasks.

### The End of the Game

- A winner is declared based on exceptional performance.
- Enjoy snapshots taken during the game, preserving memories.

## Important Components

### Scoring System

- Earn points by completing missions; timers determine scores.
- Secret missions yield substantial points if successfully accomplished.

### Photographic Component

- Capture images to validate mission completion.
- Mandatory photography for survival and punishment missions.
- Photos stored in the database, showcased at the game's end.

### Game Manager

- Three classes: Game, Player, Mission, for organization.
- Local instances and Firebase copies ensure synchronization.
- Game Manager updates through listeners/sockets for seamless gameplay.

## Architectural Overview

The project directory contains essential folders and files:

- **White_Sauce**: Central files and configuration.
- **node_modules**: Dependencies for the project.
- **public**: Public assets and entry point.
- **react_app**: Core React components.
- **src**: Application source code.
  - **App.tsx**: Application entry point.
  - **Components**: Reusable components.
  - **Classes.tsx**: Core classes for game management.
  - **Config**: Firebase communication.
  - **Pages**: Complete app pages.
  - **Images**: Design images.
  - **GameManager.tsx**: Integrates and manages pages.
  - **Theme_page.tsx**: Displays design elements.
  - **theme.tsx**: Application design language.
- **User Pilot**: Insights from pilot testing.

## User Pilot

### Case 1: Friends Pilot

- Positive feedback for concept, design, and entertainment.
- Suggestions: "Go back" option for secret missions, better guide visibility, progress bar, and diverse task features.

### Case 2: Strauss Family Pilot

- Positive feedback for design and photo album creation.
- Suggestions: More filter variety, broader mission pool, stress-free timers.

## Feedback and Improvements

Step-1 thrives on user input and continuous enhancement. Your feedback is invaluable, helping us refine the game's experience. Share your thoughts and ideas on [GitHub Issues](https://github.com/itaybober/step-one/issues).

## Getting Started

Get started with Step-1 by visiting the [website](https://itaybober.github.io/step-one/). To contribute or explore the code, head over to our [GitHub repository](https://github.com/itaybober/step-one).


---

**Step-1** – Elevate your social gatherings with captivating missions, friendly competition, and unforgettable memories!
