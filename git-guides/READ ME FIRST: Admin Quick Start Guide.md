Getting Started
If you haven’t already, launch the setup wizard and go through the steps to configure your site. You can run the wizard as many times as you want, it’s completely safe!

Admin Dashboard
Exercise your admin superpowers any time via the admin dashboard at

/admin

You can also access it via the “hamburger” ☰ menu in the upper right: Admin functions are generally marked with the wrench :wrench: icon, so look for that.

Staff
Staff members are official representatives of this community. There are two kinds of Staff:

Admins, who can do anything and configure anything on this site.
Moderators, who can edit all posts and users, but cannot add categories or change any site settings.
To add additional staff members:

have them sign up on the site (or send out an invitation to join via your user page)
click the admin button :wrench: on their user page
look for the Grant Admin and Grant Moderator buttons there
Social Logins
Users can log in with traditional local username and password accounts. You may want to add:

Google logins 3
Twitter logins
Facebook logins 1
GitHub logins
You can also set up single-sign on, or even build your own login method.

Test Your Email
Email is required for new account signups and notifications. Test your email to make sure it is configured correctly! Visit the admin email settings, then enter an email address in the “email address to test” field and click send test email.

You got the test email? Great! Read that email closely, it has important email deliverability tips.
You didn’t get the test email? This means your users probably aren’t getting any signup or notification emails either.
Email deliverability can be hard. Read Email Service Configuration.
If you’d like to enable replying to topics via email, see this howto.

Categories
You have three default categories:

Site Feedback – general discussion about the site itself. It’s important!
Lounge – a perk for users at trust level 3 and higher
Staff – visible only to staff (admins and moderators)
Don’t create too many initial categories, as you can overwhelm your audience. You can always add more categories, and easily bulk recategorize topics later. It’s better to figure out the organization as you go rather than assuming you’ll get it all right from the beginning (hint: you won’t).

To add a category, visit the categories page, then click Create Category at the upper right. You can set security per-category so only certain groups of users can see topics in that category.

Every category has an initial “About this category” topic. This topic will be pinned to the top of the category, and the description you enter will be used in a bunch of places. Be sure to give your new category a good, clear description, so people understand what belongs there!

Pinned Topics and Banners
Note that pinning topics does work a little differently in Discourse:

Once someone reads to the bottom of a pinned topic, it is automatically unpinned for them specifically. They can change this via the personal pin controls at the bottom of the topic.
When staff pins a topic, they can pin it globally to all topic lists, or just within its category.
If a pin isn’t visible enough, you can also turn one single topic into a banner. The banner topic floats on top of all topics and all primary pages. Users can permanently dismiss this floating banner by clicking the × in the upper right corner.

To make (or remove) a pin or a banner, use the admin wrench at the top right or bottom of the topic.

New User Sandbox and the Trust System
If your discussion area is be open to the public, new visitors will arrive that are initially strangers to the community. Discourse has a trust system where users can, over time, earn the trust of the community and gain abilities to assist in governing their community.

Discourse is designed to offer safe defaults for public communities, even with no active moderation.

0 (new) → 1 (basic) → 2 (member) → 3 (regular) → 4 (leader)

All new users start out in a sandbox with restrictions for everyone’s safety. Trust level 0 (new) users cannot …

post more than 2 hyperlinks
post more than 1 image
post file attachments
send personal messages
flag posts or topics
have actual links in the “about me” field of their profile
@name mention more than 2 users in a post
Every action a user can take is rate limited for safety, and especially so for new users. But don’t worry, new users can transition to trust level 1 in about 10 minutes of reading.

These defaults are safe, but note that while in “bootstrap mode” after you set up your site, all new users will be granted trust level 1 until you reach 50 users.

Building Your Community
Be patient; building communities is hard. Before launching, be sure to:

Clearly define your community’s purpose in a pinned or banner topic.
Seed the discussion with interesting topics.
Commit to visiting and participating regularly.
Link your community everywhere and promote it so people can find it.
There’s more advice at Building a Discourse Community.

Sending Invitations
One way to get people to visit your site is to invite them via email. You can do this via:

The Invite button at the bottom of the topic.
The Invite area on your profile page.
The invite area on your profile page also includes advanced Staff methods of sending bulk invites, and inviting users into groups.

Maintenance
One CPU and 1GB of memory, with swap, is the minimum for a basic Discourse community. As your community grows you may need more memory or CPU resources.

Our Docker container install is the only one we officially support. It guarantees easy updates, and all recommended optimizations from the Discourse team.

You should get an email notification when new versions of Discourse are released. To update your instance via our easy one click upgrade process, visit /admin/upgrade.

Some other things you might eventually want to set up:

Automatic daily backups
HTTPS support
Content Delivery Network support
Reply via Email
Import and Export your data
Change the domain name
Multiple Discourse instances on the same server
Import old content from vBulletin, PHPbb, Vanilla, Drupal, BBPress, etc
A firewall on your server? Configure firewall.
A user friendly offline page when rebuilding or upgrading?
Embed Discourse in your WordPress install, or on your static HTML site
