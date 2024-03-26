import { type TeamType } from '@/types/team'
import SectionTitle from '../Common/SectionTitle'
import SingleTeam from './SingleTeam'

const teamData: TeamType[] = [
  {
    id: 1,
    name: 'Zavaar Shah',
    designation: 'Fullstack Developer',
    image: '/images/team/team-01.png',
    githubLink: 'https://github.com/ThatZiv',
    LinkedInLink: 'https://www.linkedin.com/in/zavaar-shah/',
    instagramLink: '/#'
  },
  {
    id: 2,
    name: 'Venkat Yenduri',
    designation: 'Fullstack Developer',
    image: '/images/team/team-02.png',
    githubLink: 'https://github.com/XLRA',
    LinkedInLink: 'https://www.linkedin.com/in/venkatyenduri/',
    instagramLink: '/#'
  },
  {
    id: 3,
    name: 'Sukrut Nadigotti',
    designation: 'Fullstack Developer',
    image: '/images/team/team-03.png',
    githubLink: 'https://github.com/SukrutN',
    LinkedInLink: 'https://www.linkedin.com/in/sukrutn/',
    instagramLink: '/#'
  },
  {
    id: 4,
    name: 'Pierre Tawfik',
    designation: 'Fullstack Developer',
    image: '/images/team/team-04.png',
    githubLink: 'https://github.com/PierreT20',
    LinkedInLink: 'https://www.linkedin.com/in/pierretawfik/',
    instagramLink: '/#'
  }
]

const Team = () => {
  return (
    <section
      id="team"
      className="bg-gray-1 dark:bg-dark-2 overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team) => (
            <SingleTeam key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
