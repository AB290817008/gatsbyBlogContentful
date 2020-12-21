/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
	siteMetadata: {
		title: 'AB Food Blogs'
	},
	/* Your site config here */
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},

		{
			resolve: 'gatsby-plugin-firebase',
			options: {
				credentials: {
					apiKey: 'AIzaSyDkOOOOdb0s-BmltM7gBU-7SqNbtSTl3PY',
					authDomain: 'gatby-whc-two.firebaseapp.com',
					databaseURL: 'https://gatby-whc-two-default-rtdb.firebaseio.com/',
					projectId: 'gatby-whc-two',
					storageBucket: 'gatby-whc-two.appspot.com',
					messagingSenderId: '950187205993',
					appId: '1:950187205993:web:04ea8b04ff6ed3cbb0c9f8',
					measurementId: 'G-JHEL0P1VL9'
				}
			}
		}
	]
};
