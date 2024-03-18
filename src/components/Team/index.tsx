import { type TeamType } from '@/types/team'
import SectionTitle from '../Common/SectionTitle'
import SingleTeam from './SingleTeam'

const teamData: TeamType[] = [
  {
    id: 1,
    name: 'Sukrut Nadigotti',
    designation: 'Software Developer',
    image: '/images/team/team-01.png',
    facebookLink: '/#',
    twitterLink: '/#',
    instagramLink: '/#'
  },
  {
    id: 2,
    name: 'Venkat Yenduri',
    designation: 'Software Developer',
    image: '/images/team/team-02.png',
    facebookLink: '/#',
    twitterLink: '/#',
    instagramLink: '/#'
  },
  {
    id: 3,
    name: 'Zavaar Shah',
    designation: 'Software Developer',
    image: '/images/team/team-03.png',
    facebookLink: '/#',
    twitterLink: '/#',
    instagramLink: '/#'
  },
  {
    id: 4,
    name: 'Pierre Tawfik',
    designation: 'Software Developer',
    image: '/images/team/team-04.png',
    facebookLink: '/#',
    twitterLink: '/#',
    instagramLink: '/#'
  }
  {
    id: 5,
    name: 'Yusef Turfe',
    designation: 'Software Developer',
    image: '/images/team/team-05.png',
    facebookLink: '/#',
    twitterLink: '/#',
    instagramLink: '/#'
  }
{
    id: 6,
    name: 'Alberto Cervantes',
    designation: 'Software Developer',
    image: '/images/team/team-06.png',
    facebookLink: '/#',
    twitterLink: '/#',
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
