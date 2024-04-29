from datetime import datetime

from about.models import About
from experience.models import Experience

ABOUT = "I am a software engineer who loves soccer, music, and life."
DESCRIBE_ME = [
    "Hi, my name is Chhewang Sherpa.",
    "Guy who loves coding and coffee.",
    "<ButLovesSoccerMore/>",
]

EXPERIENCE = [
    {
        "title": "Software Engineer",
        "company": "L3Harris",
        "start_date": "09/2019",
        "end_date": "",
        "description": [
            """
            Worked as a core developer in developing a web application in Data Science 
            and Architecture team and led the design of software architecture, backend implementation, database setup, and
            its deployment using technologies like Docker, python/Django framework, psql, JavaScript,
            React, and Redux.
            """,
            """
            Spearheaded Continuous Integration/Continuous Deployment (CI/CD) tool adoption, serving as
            the Point of Contact (POC) for the team, managing processes, writing technical documentation,
            and troubleshooting guides for knowledge sharing.
            """,
            """
            Led the design and development of a pilot project, creating a service for system engineers to
            automate requirement capture, data lineage, and requirements hierarchy on JIRA from Magic
            Draw, leveraging teamwork cloud API and message queue service with Docker, Python, Kafka,
            Magic Draw, Teamwork Clouds, and JIRA.            
            """,
        ],
    },
    {
        "title": "Software Engineer Intern",
        "company": "Naval Undersea Warfare Center Keyport Division",
        "start_date": "06/2019",
        "end_date": "08/2019",
        "description": [
            """
            Implemented data modeling and data filtering algorithms on CLASSIFIED raw data using tools
            and libraries like python, jupyter notebook, scikit-learn, and pandas.
            """
        ],
    },
    {
        "title": "NOAA Undergraduate Scholar",
        "company": "NOAA-CREST",
        "start_date": "06/2018",
        "end_date": "12/2018",
        "description": [
            """
            Gathered and preprocessed data to facilitate the creation and presentation of statistical models using R Studio and its libraries.
            """,
            """
            Developed an automated image scroll for temporal results visualization and
            data patterns exploration to support research hypothesis using R and its visualization library.
            """,
        ],
    },
]


# Define function to populate About model
def populate_about():
    about_instance = About()
    about_instance.bio = ABOUT
    about_instance.describe_me = DESCRIBE_ME

    about_instance.save()


def populate_experience():
    experience = Experience()

    # Iterate over the EXPERIENCE list and create Experience instances

    for exp_data in EXPERIENCE:
        # Convert start and end dates to datetime objects
        start_date_str = exp_data["start_date"]
        end_date_str = exp_data["end_date"]

        if start_date_str:
            start_date = datetime.strptime(start_date_str, "%m/%Y")
        else:
            start_date = None

        if end_date_str:
            end_date = datetime.strptime(end_date_str, "%m/%Y")
        else:
            end_date = None

        # Create the Experience instance
        experience = Experience(
            title=exp_data["title"],
            company=exp_data["company"],
            start_date=start_date,
            end_date=end_date,
            description=exp_data["description"],
        )

        # Save the instance to the database
        experience.save()


# Populate the About model
populate_about()
populate_experience()
