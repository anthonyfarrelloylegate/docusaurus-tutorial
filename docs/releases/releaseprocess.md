---
id: releaseprocess
title: How to build a Release
---
## 1. Before building a Release Candidate
Each time a delivery is made to RTC a build will be created by our [Continuous Integration Pipeline](https://scdelivery.mul.ie.ibm.com/job/sc-wcm-reporting/job/cloudreporting/view/Contineous%20Integration%20Pipeline/).  
This will:
* Build a release candidate zip 
* Create the reporting warehouse tables on reporting02.mulvm.ie.ibm.com in the CI_TENANT schema
* Import the data for reports through the ETL pipeline
* Deploy the cognos zips onto reporting04.mulvm.ie.ibm.com (Cognos Dev Server)

**Only when the pipeline above is green we can proceed to the next step.**
1. Take the build number from the build created by the [Continuous Integration Pipeline](https://scdelivery.mul.ie.ibm.com/job/sc-wcm-reporting/job/cloudreporting/view/Contineous%20Integration%20Pipeline/) and update the build number in each step in the [Internal Team FVT Build Pipeline](https://scdelivery.mul.ie.ibm.com/job/sc-wcm-reporting/job/cloudreporting/view/Internal%20Team%20FVT%20build%20pipeline/)
2. Run the Internal Team Build Pipeline.   
This will: 
      * Create the reporting warehouse tables on reporting02.mulvm.ie.ibm.com in the FVT_TENANT schema
      * Import the data for reports through the ETL pipeline
      * Deploy the cognos zips onto reporting03.mulvm.ie.ibm.com (Cognos FVT Server)
3. Verify the code deployed on the Cognos CI builder reporting03.mulvm.ie.ibm.com.  
Execute the Cognos Job that runs all development reports and UAT reports, circa 170+ reports and verify all reports executed successfully 
4. Verify that all jobs in the [Reporting for IBM Cloud](https://scdelivery.mul.ie.ibm.com/job/sc-wcm-reporting/job/cloudreporting/) folder are green.
5. Verify the database upgrade (Liquibase change sets) have been tested locally. Process is to build Reporting tables for previous release, then upgrade. 

## 2. Cut Release and Tag RC
Before start Jenkins promotion builds, please confirm the target stream ready to be overwrite. 

### 2.1 Cut New Release RC0
1. If cut new Release Candidate (such as 19:** RC0), need promote all streams code into downstream.
Firstly promote Stabilization to Live: **[STABILIZATION promote to LIVE builder link](http://scdelivery.mul.ie.ibm.com/job/sc-release-engineering/job/reporting-streams-promotion/job/reportingcloud/job/push-reportingcloud-live-baselines/)**
![Streams](assets/live-promote.png)
Parameters is the latest zip files in [Artifactory](http://screpo1.mul.ie.ibm.com/webapp/#/home).
Each Jenkins builder requires different repository artifact files, carefully read the parameters hint.
***

2. Make sure all builds run successfully and passed.
Next promote Candidate to Stabilization: **[CANDIDATE promote to STABILIZATION builder link](http://scdelivery.mul.ie.ibm.com/job/sc-release-engineering/job/reporting-streams-promotion/job/reportingcloud/job/push-reportingcloud-stabilization-baselines/)**
***

3. Make sure all builds run successfully and passed.
Last promote Mainline to Candidate: **[MAINLINE promote to CANDIDATE builder link](http://scdelivery.mul.ie.ibm.com/job/sc-release-engineering/job/reporting-streams-promotion/job/reportingcloud/job/push-reportingcloud-candidate-baselines/)**

* #### Promotion order is important, must run in Live -> Stabilization -> Candidate. Otherwise code will be overwritten and lost. ####

***

4. Kick off Candidate Stream Reporting build and make sure it pick up all changes come from mainline.
***

5. Get Candidate reporting zip(in Step 4) location in Artifactory, tag this artifact file by **[Tag Reporting RC builder link](http://scdelivery.mul.ie.ibm.com/job/sc-release-engineering/job/rename-zip-files/job/copy-rename-reporting/)**. 
After this builder, tagged zip will copied to smartcare-rel-local automatically.
***

6. Update smartcare-rel-local link of zip in [Release Candidates View Wiki](releases/rc.md).
***

7. Update Deployment streams table in [Streams View Wiki](releases/streams.md).
***

8. Post-action of Cut Release. Once the release is verified and accepted the final step is to update the sprint number within the build.gradel file.

      E.g: project.ext.set("sprintNumber",'1.1.74')


### 2.2 Tag patch RC (such as 19.** RC2)

1. If tag fix patch Release Candiate (such as 19.** RC2) on Candidate stream, just straightforward rename Candidate Reporting zip.
Make sure Candidate Stream Reporting build passed and pick up all fix code.
***

2. (Same as 2.1 Step 5) Get latest Candidate reporting zip location in Artifactory, tag this artifact file by **[Tag Reporting RC builder link](http://scdelivery.mul.ie.ibm.com/job/sc-release-engineering/job/rename-zip-files/job/copy-rename-reporting/)**. 
After this builder, tagged zip will copied to smartcare-rel-local automatically.
***

3.  (Same as 2.1 Step 6) Update smartcare-rel-local link of zip in [Release Candidates View Wiki](releases/rc.md).

### 2.3 Tag Hot Fix Release (such as 19.** 001)


1. If need tag hot fix for defect, normally fix code delivered into Stabilization stream, similar with tag patch RC (2.2), just straightforward rename Stabilization Reporting zip.
***

2. (Same as 2.1 Step 5) Get latest Stabilization reporting zip location in Artifactory, tag this artifact file by **[Tag Reporting RC builder link](http://scdelivery.mul.ie.ibm.com/job/sc-release-engineering/job/rename-zip-files/job/copy-rename-reporting/)**. 
After this builder, tagged zip will copied to smartcare-rel-local automatically.
***

3. (Same as 2.1 Step 6) Update smartcare-rel-local link of zip in [Release Candidates View Wiki](releases/rc.md).
