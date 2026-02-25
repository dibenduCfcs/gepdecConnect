import Breadcrmb from '../../components/breadcrmb/Breadcrmb';
import FilterCount from '../../components/filter-count';
import ITAnnouncementCard from './components/it-announcement-card';
import filter from '../../assets/filter.svg';
import './styles.css';

const ITAnnouncements = () => {
  const itAnnouncementData = [
    {
      id: 1,
      title: 'Server Maintenance Notification',
      date: 'Feb 19, 2026',
      priority: 'High',
      status: 'Upcoming',
      category: 'Maintenance',
      affectedSystem: 'ERP',
      tags: ['Maintenance'],
      description:
        'Scheduled maintenance of the primary server from 12:00 AM to 4:00 AM. Access to internal systems, email, and project applications may be temporarily interrupted.',
      readMoreUrl: '/it/announcements/1',
    },
    {
      id: 2,
      title: 'Email System Upgrade',
      date: 'Feb 17, 2026',
      priority: 'Medium',
      status: 'Completed',
      category: 'Email',
      affectedSystem: 'Email Server',
      tags: ['Email'],
      description:
        'Corporate email platform upgraded to the latest version with improved spam filtering and enhanced calendar integration.',
      readMoreUrl: '/it/announcements/2',
    },
    {
      id: 3,
      title: 'VPN Access Update – MFA Enforcement',
      date: 'Feb 14, 2026',
      priority: 'Critical',
      status: 'Ongoing',
      category: 'Security Alert',
      affectedSystem: 'VPN',
      tags: ['Security Alert'],
      description:
        'Multi-factor authentication is now required for all VPN connections. Please update your VPN client.',
      readMoreUrl: '/it/announcements/3',
    },
    {
      id: 4,
      title: 'Network Degradation – Building B',
      date: 'Feb 12, 2026',
      priority: 'High',
      status: 'Ongoing',
      category: 'Network',
      affectedSystem: 'Network',
      tags: ['Network'],
      description:
        'Intermittent connectivity issues affecting Building B. Temporary workaround available via secondary access point.',
      readMoreUrl: '/it/announcements/4',
    },
    {
      id: 5,
      title: 'HRMS Policy Update – Leave Module',
      date: 'Feb 10, 2026',
      priority: 'Low',
      status: 'Completed',
      category: 'Policy Update',
      affectedSystem: 'HRMS',
      tags: ['Policy Update'],
      description: 'Updated leave entitlement rules have been applied to the HRMS leave module.',
      readMoreUrl: '/it/announcements/5',
    },
    {
      id: 6,
      title: 'ERP System Software Patch v4.2.1',
      date: 'Feb 08, 2026',
      priority: 'Medium',
      status: 'Completed',
      category: 'Software',
      affectedSystem: 'ERP',
      tags: ['Software'],
      description:
        'Critical bug fix patch applied to ERP system addressing procurement and inventory performance issues.',
      readMoreUrl: '/it/announcements/6',
    },
    {
      id: 7,
      title: 'Hardware Refresh – Finance Department',
      date: 'Feb 05, 2026',
      priority: 'Low',
      status: 'Upcoming',
      category: 'Hardware',
      affectedSystem: 'All Systems',
      tags: ['Hardware'],
      description:
        'Workstation refresh for Finance team scheduled. Devices will be replaced with new units.',
      readMoreUrl: '/it/announcements/7',
    },
    {
      id: 8,
      title: 'Project Management System Downtime',
      date: 'Feb 03, 2026',
      priority: 'Critical',
      status: 'Archived',
      category: 'System Update',
      affectedSystem: 'Project Management System',
      tags: ['System Update'],
      description:
        'Emergency maintenance conducted on the project management platform. All services restored.',
      readMoreUrl: '/it/announcements/8',
    },
  ];

  return (
    <div className="max-width-screen">
      <Breadcrmb
        items={[
          { label: 'Home', path: '/' },
          { label: 'IT', path: '/it' },
          { label: 'IT Announcements' },
        ]}
      />
      <div className="it-anc-container">
        <div className="it-anc-left-container">
          <div className="it-anc-filter-head-con">
            <img src={filter} alt="inc-anc-filter" />
            <p>{'Filter Announcements'}</p>
          </div>
        </div>
        <div className="it-anc-right-container">
          <div className="it-anc-filter-con">
            <FilterCount count={8} totalCount={8} color="#121F0A" />
            <div className="it-anc-filter-con">
              <span>
                {'Sorted by:  '}
                <span>{'Newest First'}</span>
              </span>
            </div>
          </div>

          <div className="it-anc-list-container">
            {itAnnouncementData.map((item) => {
              return <ITAnnouncementCard key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ITAnnouncements;
