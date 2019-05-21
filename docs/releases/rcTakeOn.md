---
id: rctakeon
title: Development Release Take-on
---
This page describes the steps to take-on a new Development Release of ReportingOnCloud.

The steps below are valid whilst we build out the devOps tasks which will automate/formalise some or all of below.


From the Release Candidate page go to the Development Release section,  note the build number, e.g. 46.  

You can get the zip from Artifactory also.

1. Go to https://scdelivery.mul.ie.ibm.com/job/sc-wcm-reporting/job/cloudreporting/job/reportingoncloud-build-rtc/

2. Select to build for example build #46.
Then go to Build artifacts and select ReportingOnCloud_release.zip, this will prompt you to download to disk. Accept.

3. Explode the zip file (unzip)
Then explode the congos content zip file named com.ibm.wcm.reporting.cognoscontent-1.0.zip

4. Cognos SaaS steps
 * sftp the file wcmReportingContent.zip to Cognos SaaS instance
 * sftp the file wcmReportingContentTestPack.zip to Cognos SaaS instance
 * DANGER.  Do not sftp the entire content store zip wcmEntireContentStore.zip unless the Reporting Development group SME Una Simpson gives explicit permission to do so.  This might break the SaaS instance.

5. Login to Cognos, then go to Administration console. Create two jobs to import the wcmReportingContent and wcmReportingContentTestPack zips.

6. **For FVT resource.**
For Anna - when you are ready to take-on this build.  Set the build number noted earlier, e.g.46, in both of these jobs
1. https://scdelivery.mul.ie.ibm.com/job/sc-wcm-reporting/job/cloudreporting/job/reportingoncloud-ibmcloud-fvt-warehouse/ (edited)
2. https://scdelivery.mul.ie.ibm.com/job/sc-wcm-reporting/job/cloudreporting/job/reportingoncloud-ibmcloud-fvt-etl/
Run the warehouse job to reset the reporting schema.  Run ETL as required.
