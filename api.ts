import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import Axios from "axios";

export interface ClinicalProtocol {
  "# Completed"?: string;
  "# Early Terminated"?: string;
  "# Enrolled"?: string;
  "# Eudra"?: string;
  "# Planned": string;
  "# Re-Screened"?: string;
  "# Screen Failures"?: string;
  "# Screened"?: string;
  "Actual End Date"?: string;
  "Actual Start Date"?: string;
  "Amount Currency Code"?: string;
  "Amount Earned To Date"?: string;
  "Amount Exchange Date"?: string;
  "Amount Paid To Date"?: string;
  "Application Filed"?: string;
  "Application Id"?: string;
  "Application Number"?: string;
  "Application Sub Type"?: string;
  "Application Type"?: string;
  "Approval Date"?: string;
  "Auto Subjects"?: string;
  "BAY # Days FPFT to OMV"?: string;
  "BAY # Days FPFV to OMV"?: string;
  "BAY Employee Action Position Id"?: string;
  "BAY General Comments"?: string;
  "BAY Managing Medical Unit"?: string;
  "BAY Max PMV Interval"?: string;
  "BAY Max Remote Interval"?: string;
  "BAY Monitoring"?: string;
  "BAY OMV Intervals"?: string;
  "BAY Protocol Id"?: string;
  "BAY Remote Intervals"?: string;
  "BAY SDR Ratio"?: string;
  "BAY SDV Approach"?: string;
  "BAY SDV Percent"?: string;
  "BAY Updating Medical Unit"?: string;
  "CDMS Study ID"?: string;
  "CRO Address"?: string;
  "CRO Address Id"?: string;
  "CRO City"?: string;
  "CRO Contact First Name"?: string;
  "CRO Contact Id"?: string;
  "CRO Contact Last Name"?: string;
  "CRO Country"?: string;
  "CRO Fax #"?: string;
  "CRO Id"?: string;
  "CRO Name"?: string;
  "CRO Phone #"?: string;
  "CRO Postal Code"?: string;
  "CRO State"?: string;
  "CRO eMail"?: string;
  "CT Plan Id"?: string;
  "CT Study Id"?: string;
  "Central Lab Address"?: string;
  "Central Lab Address Id"?: string;
  "Central Lab City"?: string;
  "Central Lab Contact First Name"?: string;
  "Central Lab Contact Id"?: string;
  "Central Lab Contact Last Name"?: string;
  "Central Lab Country"?: string;
  "Central Lab Fax"?: string;
  "Central Lab Id"?: string;
  "Central Lab Name"?: string;
  "Central Lab Phone"?: string;
  "Central Lab State"?: string;
  "Central Lab Zipcode"?: string;
  "Central Lab eMail"?: string;
  "Clinical Program Id"?: string;
  "Clinical Program Name": string;
  "Comparative Agent"?: string;
  "Database Lock Date"?: string;
  Diagnosis?: string;
  "First Site Initiated Date"?: string;
  "First Subject Enrolled Date"?: string;
  "Initial Subjects"?: string;
  "Is CDMS null"?: string;
  "Last Site Terminated Date"?: string;
  "Last Subject Off Study Date"?: string;
  "Last Subject Off Study Date Format"?: string;
  "Login User"?: string;
  Name?: string;
  "Number Sites Planned": string;
  Objective?: string;
  "Parent Protocol Id"?: string;
  Phase: string;
  "Planned Budget Amount"?: string;
  "Planned End Date"?: string;
  "Planned Start Date"?: string;
  "Primary Authority Id"?: string;
  "Primary Design Id": string;
  "Primary Position Id"?: string;
  "Program Indication"?: string;
  "Program Mechanism"?: string;
  "Program Product Id"?: string;
  "Protocol Abbreviated Title"?: string;
  "Protocol Name"?: string;
  "Protocol Number": string;
  "Protocol Product Class"?: string;
  "Protocol Product Id"?: string;
  "Protocol Product Name": string;
  "Protocol Status": string;
  "Protocol Title": string;
  "Protocol Type": string;
  Region?: string;
  "Regions Required Flag"?: string;
  "Regions Required Literal"?: string;
  "Rollup Parent Buscomp Name"?: string;
  "Rollup Parent Id"?: string;
  "Safety Study Id"?: string;
  "Sites Completed"?: string;
  "Sponsor Description"?: string;
  "Sponsor Id"?: string;
  "Sponsor Name"?: string;
  "Synchronize Active Sites Flag"?: string;
  "Total Contract Amount"?: string;
  "Total Trainings"?: string;
  "Trainings Completed"?: string;
  "VAT Amount"?: string;
  "Withholding Amount"?: string;
  "Withholding Percentage"?: string;
}
export interface BAYStudyParameter {
  High?: string;
  Low?: string;
  Medium?: string;
  Name?: string;
  "Protocol Id"?: string;
  "Study Parameter": string;
  Type?: string;
  "Very High"?: string;
  "Very Low"?: string;
}
export interface BAYSalesAssessment {
  Updated: string;
  Accnt_Id?: string;
  "Activity Id"?: string;
  "Assessment Score"?: string;
  "Assessment Type"?: string;
  "BAY Approver Comment"?: string;
  "BAY Comment"?: string;
  "BAY Completed"?: string;
  "BAY Created"?: string;
  "BAY Final"?: string;
  "BAY Reply to Approver Comment"?: string;
  "BAY Risk Override"?: string;
  "BAY Risk Override Reason"?: string;
  "BAY Score High"?: string;
  "BAY Score Low"?: string;
  "BAY Score Medium"?: string;
  "BAY Score Very High"?: string;
  "BAY Score Very Low"?: string;
  "BAY Study Risk Level"?: string;
  "Case Id"?: string;
  Contact_Id?: string;
  Date?: string;
  Description?: string;
  "Incident Id"?: string;
  "Insured Id"?: string;
  "Literature Id"?: string;
  "Max Score"?: string;
  Name?: string;
  Opty_Id?: string;
  "Product Issue Id"?: string;
  "Program Id"?: string;
  "Protocol No"?: string;
  "Protocol Site Id"?: string;
  "Protocol-Region Id"?: string;
  "Service Request Id"?: string;
  "Site No"?: string;
  "Site Protocol Id"?: string;
  Template_Id?: string;
  Template_Name: string;
}
export interface ClinicalProtocolSite {
  "Account Id"?: string;
  "Activate Synchronization Flag"?: string;
  "Address Id"?: string;
  "Address Line 1"?: string;
  "Address RowId"?: string;
  "Address Type"?: string;
  "Amount Currency Code"?: string;
  "Amount Earned To Date"?: string;
  "Amount Exchange Date"?: string;
  "Amount Paid To Date"?: string;
  "Application Id"?: string;
  "Auto Subjects"?: string;
  "BAY First Patient First Treatment"?: string;
  "BAY Last Visit End Date"?: string;
  "BAY Max PMV Interval"?: string;
  "BAY Max Remote Interval"?: string;
  "CDMS Site"?: string;
  "CDMS Study Id"?: string;
  "CDMS Study Site"?: string;
  "Calculated Title"?: string;
  "Calculated Title For Mobile"?: string;
  "Calculated Total Contract Amount"?: string;
  City?: string;
  "Clinical Program Id"?: string;
  "Clinical Program Name"?: string;
  Country?: string;
  Description?: string;
  Email?: string;
  "Enable PSDV"?: string;
  "Fax Number"?: string;
  "First Subject Enrolled Date"?: string;
  "Initial Subjects"?: string;
  "Initiation Completed Date"?: string;
  "Investigator First Name"?: string;
  "Investigator Full Name"?: string;
  "Investigator Last Name": string;
  "Is Readonly"?: string;
  "Is Satellite Site"?: string;
  IsReapplyEnabled?: string;
  "Last Completed Date Flag"?: string;
  "Last Subject Off Study Date"?: string;
  "Last Updated By"?: string;
  "Last Updated By Login"?: string;
  "Locale Id"?: string;
  "Locale Name"?: string;
  "Login User"?: string;
  "Max Enrollment"?: string;
  Name?: string;
  "Need Rollup Last Subject Off Study Date"?: string;
  "Net Transfer Count"?: string;
  "No Subject Info Flag"?: string;
  "PSDV Rule Flag"?: string;
  "Parent Site Id"?: string;
  "Parent Site Number"?: string;
  "Phone Number"?: string;
  "Prev CDMS  Site"?: string;
  "Primary Address"?: string;
  "Primary Address Id"?: string;
  "Primary Investigator Id"?: string;
  "Primary Position Id"?: string;
  "Primary Subject Template Id"?: string;
  "Program Indication"?: string;
  "Protocol Abbreviated Title"?: string;
  "Protocol Active Sync Flag"?: string;
  "Protocol Id"?: string;
  "Protocol Number": string;
  "Protocol Number Sites Planned"?: string;
  "Protocol Number Subjects Planned"?: string;
  "Protocol Phase"?: string;
  "Protocol Product Id"?: string;
  "Protocol Product Name"?: string;
  "Protocol Program Indication"?: string;
  "Protocol Site Id"?: string;
  "Protocol Status"?: string;
  "Protocol Title"?: string;
  Region?: string;
  "Region # Planned Sites"?: string;
  "Region # Planned Subjects"?: string;
  "Region Id"?: string;
  "Region No Site Info Flag"?: string;
  "Region Status"?: string;
  "Regions Required Boolean"?: string;
  "Regions Required Check"?: string;
  "Regions Required Flag"?: string;
  "Regions Required Literal"?: string;
  "Require Active Flag Check"?: string;
  "Rollup Parent Buscomp Name"?: string;
  "Rollup Parent Id"?: string;
  "Satellite Site Count"?: string;
  "Site Bill To Address Id"?: string;
  "Site Bill To Contact Id"?: string;
  "Site Id"?: string;
  "Site Last Updated"?: string;
  "Site Name": string;
  "Site Number"?: string;
  "Site Type"?: string;
  "Site UId"?: string;
  State?: string;
  Status?: string;
  "Street Address"?: string;
  "Template Id"?: string;
  "Template Name"?: string;
  "Terminated Date"?: string;
  "Time Zone"?: string;
  "Time Zone - Translation"?: string;
  "Time Zone Id"?: string;
  "Total Completed"?: string;
  "Total Contract Amount"?: string;
  "Total Contract Amt"?: string;
  "Total Early Terminated"?: string;
  "Total Earned to Date"?: string;
  "Total Enrolled"?: string;
  "Total Number of Subjects for Site Pool"?: string;
  "Total Paid to Date"?: string;
  "Total Rescreened"?: string;
  "Total Screen Failure"?: string;
  "Total Screened"?: string;
  "Total VAT to Date"?: string;
  "Total number of SDV Subjects"?: string;
  "Total number of Subjects"?: string;
  "Trial Product"?: string;
  "Trial Product Id"?: string;
  "VAT Amount"?: string;
  "Version Name"?: string;
  "Withholding Amount"?: string;
  "Withholding Percentage"?: string;
  Zip?: string;
}
export interface ClinicalTripReport {
  "ACD Call Duration"?: string;
  Abstract?: string;
  "Account Currency Code"?: string;
  "Account Id"?: string;
  "Account Location"?: string;
  "Account Name"?: string;
  "Account Number"?: string;
  "Account Source Id"?: string;
  "Active Login Name"?: string;
  "Active Trip Report Id"?: string;
  "Activity Defect Id"?: string;
  "Activity SR Id"?: string;
  "Activity UID"?: string;
  "Agreement Id"?: string;
  "Agreement Name"?: string;
  Alarm?: string;
  "Alert Id"?: string;
  "Amount Currency Code"?: string;
  "Amount Exchange Date"?: string;
  "Approved Date"?: string;
  "Approver Id"?: string;
  "Approver Login"?: string;
  "Appt Alarm Time Min"?: string;
  "Assessment Template Id"?: string;
  "Assessment Template Name"?: string;
  "Asset Id"?: string;
  "Asset Number"?: string;
  "Assignment Excluded"?: string;
  "Associated Cost"?: string;
  "BAY Approver Email"?: string;
  "BAY Approver First Name"?: string;
  "BAY Approver Last Name"?: string;
  "BAY Approver Primary Postn Id"?: string;
  "BAY Assessment Reason"?: string;
  "BAY Assessment Req"?: string;
  "BAY Created"?: string;
  "BAY Created By Email"?: string;
  "BAY Created By First Name"?: string;
  "BAY Created By Last Name"?: string;
  "BAY Created By Parent Id"?: string;
  "BAY Number Rejections"?: string;
  "BAY Planned Next Visit Date"?: string;
  "BAY Primary Owner Email"?: string;
  "BAY Reject Interim Reviewed Date"?: string;
  "BAY Site Address Id"?: string;
  "BAY Site Address Line 1"?: string;
  "BAY Site City"?: string;
  "BAY Site Country"?: string;
  "BAY Site State"?: string;
  "BAY Site Zip Code"?: string;
  "Best Action"?: string;
  "Billable Flag"?: string;
  "Breakable flag"?: string;
  "Budgeted Cost"?: string;
  "Budgeted Cost Currency Code"?: string;
  "Budgeted Cost Exchange Date"?: string;
  "CHAMP Objective Id"?: string;
  "CRMC DTA Active"?: string;
  "Calendar Event Id"?: string;
  "Call Id"?: string;
  "Call Me Phone No."?: string;
  "Campaign Id"?: string;
  "Campaign Name"?: string;
  Category?: string;
  Class?: string;
  Comment?: string;
  Completed?: string;
  "Contact Primary Position Id"?: string;
  "Created By Name"?: string;
  "Currency Code"?: string;
  "Defect Num"?: string;
  "Defective Tag"?: string;
  "Denorm Asgn Flag"?: string;
  Description: string;
  "Deviation Amount"?: string;
  Display: string;
  Division?: string;
  "Document Expected Dt"?: string;
  "Document Received Dt"?: string;
  "Document Sent Dt"?: string;
  Done?: string;
  "Done Flag"?: string;
  Due?: string;
  "Due Date"?: string;
  "Duration Hours"?: string;
  "Duration Minutes"?: string;
  "Email Attachment Flag"?: string;
  "Email BCC Line"?: string;
  "Email Body"?: string;
  "Email CC Line"?: string;
  "Email Catalog Id"?: string;
  "Email Format"?: string;
  "Email Forward Flag"?: string;
  "Email Language Id"?: string;
  "Email Language Name"?: string;
  "Email Manual Edit Flag"?: string;
  "Email Recipient Address"?: string;
  "Email Recipient Name"?: string;
  "Email Sender Address"?: string;
  "Email Sender Name"?: string;
  "Email To Line"?: string;
  "Emp Id"?: string;
  "End Time"?: string;
  "Est Work Time Remaining"?: string;
  "Etmf Received Date"?: string;
  "Etmf Url"?: string;
  "Exchange Date"?: string;
  "Expense Item Type"?: string;
  "Expense Item Type Id"?: string;
  "Expense Related Flag"?: string;
  "Expense Report Id"?: string;
  "Expense Report Number"?: string;
  "Fund Request"?: string;
  "Fund Request Id"?: string;
  "Household Id"?: string;
  "Household Name"?: string;
  "Household Number"?: string;
  "Integration Id"?: string;
  "Investigator First Name"?: string;
  "Investigator Last Name"?: string;
  "Item Id"?: string;
  "Joined Account Id"?: string;
  "Local Account Name"?: string;
  "Local Account Number"?: string;
  "Local Investigator First Name"?: string;
  "Local Investigator Last Name"?: string;
  "Local Position"?: string;
  "Local Product Name"?: string;
  "Local Project Name"?: string;
  "Local Protocol Number"?: string;
  "Local Protocol Product"?: string;
  "Local Protocol Title"?: string;
  "Local Region"?: string;
  "Local Site Id"?: string;
  "Local Site Name"?: string;
  "Local Subject DOB"?: string;
  "Local Subject Initials"?: string;
  "Local Subject Number"?: string;
  "Local Template Name"?: string;
  "Location Level"?: string;
  "ME Event Id"?: string;
  "ME Event Name"?: string;
  "Manual Asgn Flag"?: string;
  "Max Payment Amount"?: string;
  MeetingLocation?: string;
  "No Sooner Than Date"?: string;
  Objective?: string;
  "Objective Id"?: string;
  Opportunity?: string;
  "Opportunity Currency Code"?: string;
  "Opportunity Id"?: string;
  "Order Id"?: string;
  "Order Item Id"?: string;
  "Orig Appt Id"?: string;
  "Override Type"?: string;
  "Owner First Name"?: string;
  "Owner Last Name"?: string;
  "Owner Login"?: string;
  "Parent Activity Id"?: string;
  "Parent Objective Id"?: string;
  "Payment Flag"?: string;
  "Payment Id"?: string;
  "Percent Complete"?: string;
  "Personal Location Id"?: string;
  Planned?: string;
  "Planned Completion"?: string;
  Position?: string;
  "Position Id"?: string;
  "Premise Id"?: string;
  "Previous Activity Id"?: string;
  "Price List"?: string;
  "Price List Id"?: string;
  "Primary Address Id"?: string;
  "Primary Attachment Id"?: string;
  "Primary Contact Id"?: string;
  "Primary Investigator Id"?: string;
  "Primary Owned By"?: string;
  "Primary Owner Id"?: string;
  "Primary Product Detailed Id"?: string;
  "Primary Symptom Code"?: string;
  Priority?: string;
  "Program Id"?: string;
  "Program Name"?: string;
  "Project Currency Code"?: string;
  "Project Id"?: string;
  "Project Item Actual End"?: string;
  "Project Item Actual Start"?: string;
  "Project Item Id"?: string;
  "Project Item Name"?: string;
  "Project Item Planned End"?: string;
  "Project Item Planned Start"?: string;
  "Project Name"?: string;
  "Project Number"?: string;
  "Protocol Id"?: string;
  "Protocol Number"?: string;
  "Protocol Product Id"?: string;
  "Protocol Site Id"?: string;
  "Protocol Title"?: string;
  "Quote Id"?: string;
  "Rate List"?: string;
  "Rate List Id"?: string;
  Region?: string;
  "Region Id"?: string;
  "Repair Id"?: string;
  "Repeat End Series"?: string;
  Repeating?: string;
  "Repeating Expires"?: string;
  "Repeating Type"?: string;
  Required?: string;
  "Resolution Code"?: string;
  "Reviewed Date"?: string;
  "Reviewer Comments"?: string;
  "Reviewer Id"?: string;
  "Reviewer Login"?: string;
  "Risk Id"?: string;
  "S-S Instance"?: string;
  "S-S Instance Id"?: string;
  "S-S Key Id"?: string;
  "SR Number"?: string;
  "SR Status"?: string;
  "Sample Reference Number"?: string;
  "Schedule Excluded"?: string;
  "Serial Number"?: string;
  "Service Location Id"?: string;
  "Service Region"?: string;
  "Service Region Id"?: string;
  "Short Comment"?: string;
  "Signature Captured"?: string;
  "Site Id"?: string;
  "Site Name"?: string;
  "Site Number": string;
  "Smart Script Id"?: string;
  "Smart Script Name"?: string;
  "SmartScript Last Updated Time"?: string;
  "SmartScript Status"?: string;
  "Snapshot Timestamp"?: string;
  Started?: string;
  Status: string;
  "Subject DOB"?: string;
  "Subject Id"?: string;
  "Subject Initials"?: string;
  "Subject Number"?: string;
  "Suppress Calendar"?: string;
  "System Asgn Flag"?: string;
  "Template Flag"?: string;
  "Template Id"?: string;
  "Template Name"?: string;
  "Test Order Id"?: string;
  "Time Sheet Id"?: string;
  "Time Sheet Line Id"?: string;
  "Time Sheet Number"?: string;
  "Time Sheet Related Flag"?: string;
  "Travel Time Min"?: string;
  "Trip Report Completed"?: string;
  "Trip Report Created By"?: string;
  "Trip Report Modification Number"?: string;
  "Trip Report Status"?: string;
  "Trip Report Status - WF Update"?: string;
  Type: string;
  Version?: string;
  "Web Collab Session Handle"?: string;
  "Web Collab Start View"?: string;
  "Web Collab Type"?: string;
  "Work Time Min"?: string;
  "WorkItem Id"?: string;
}
export interface ClinicalFollowUpSiteLevel {
  "ACD Call Duration"?: string;
  Abstract?: string;
  "Account Currency Code"?: string;
  "Account Id"?: string;
  "Account Location"?: string;
  "Account Name"?: string;
  "Account Number"?: string;
  "Account Source Id"?: string;
  "Activity Defect Id"?: string;
  "Activity SR Id"?: string;
  "Activity UID"?: string;
  "Agreement Id"?: string;
  "Agreement Name"?: string;
  Alarm?: string;
  "Alert Id"?: string;
  "Amount Currency Code"?: string;
  "Amount Exchange Date"?: string;
  "Appt Alarm Time Min"?: string;
  "Assessment Template Id"?: string;
  "Assessment Template Name"?: string;
  "Asset Id"?: string;
  "Asset Number"?: string;
  "Assignment Excluded"?: string;
  "Associated Cost"?: string;
  "BAY Action Taken"?: string;
  "BAY Date Identified"?: string;
  "BAY Date Resolved"?: string;
  "BAY Include In Follow Up Letter"?: string;
  "BAY Last Viisit End Date"?: string;
  "BAY Protocol Number"?: string;
  "BAY Protocol Region Id"?: string;
  "BAY Question"?: string;
  "BAY Reply to Approver Comments"?: string;
  "BAY Section"?: string;
  "BAY Site Number"?: string;
  "Best Action"?: string;
  "Billable Flag"?: string;
  "Breakable flag"?: string;
  "Budgeted Cost"?: string;
  "Budgeted Cost Currency Code"?: string;
  "Budgeted Cost Exchange Date"?: string;
  "CHAMP Objective Id"?: string;
  "CRMC DTA Active"?: string;
  "Calendar Event Id"?: string;
  "Calendar Event Id 2"?: string;
  "Call Id"?: string;
  "Call Me Phone No."?: string;
  "Campaign Id"?: string;
  "Campaign Name"?: string;
  Category?: string;
  "Chosen Template"?: string;
  Class?: string;
  "Clinical Region"?: string;
  Comment?: string;
  Completed?: string;
  "Contact Primary Position Id"?: string;
  "Created By Name"?: string;
  "Currency Code"?: string;
  "Defect Num"?: string;
  "Defective Tag"?: string;
  "Denorm Asgn Flag"?: string;
  Description?: string;
  "Deviation Amount"?: string;
  Display?: string;
  Division?: string;
  "Document Expected Dt"?: string;
  "Document Received Dt"?: string;
  "Document Sent Dt"?: string;
  Done?: string;
  Due?: string;
  "Due Date"?: string;
  "Duration Hours"?: string;
  "Duration Minutes"?: string;
  "Email Attachment Flag"?: string;
  "Email BCC Line"?: string;
  "Email Body"?: string;
  "Email CC Line"?: string;
  "Email Catalog Id"?: string;
  "Email Format"?: string;
  "Email Forward Flag"?: string;
  "Email Language Id"?: string;
  "Email Language Name"?: string;
  "Email Manual Edit Flag"?: string;
  "Email Recipient Address"?: string;
  "Email Recipient Name"?: string;
  "Email Sender Address"?: string;
  "Email Sender Name"?: string;
  "Email To Line"?: string;
  "End Time"?: string;
  "Est Work Time Remaining"?: string;
  "Exchange Date"?: string;
  "Expense Item Type"?: string;
  "Expense Item Type Id"?: string;
  "Expense Related Flag"?: string;
  "Expense Report Id"?: string;
  "Expense Report Number"?: string;
  "Fund Request"?: string;
  "Fund Request Id"?: string;
  "Household Id"?: string;
  "Household Name"?: string;
  "Household Number"?: string;
  "Integration Id"?: string;
  "Item Id"?: string;
  "Joined Account Id"?: string;
  "Location Level"?: string;
  "ME Event Id"?: string;
  "ME Event Name"?: string;
  "Manual Asgn Flag"?: string;
  "Max Payment Amount"?: string;
  MeetingLocation?: string;
  "No Sooner Than Date"?: string;
  Objective?: string;
  "Objective Id"?: string;
  Opportunity?: string;
  "Opportunity Currency Code"?: string;
  "Opportunity Id"?: string;
  "Order Id"?: string;
  "Order Item Id"?: string;
  "Orig Appt Id"?: string;
  "Override Type"?: string;
  "Owner First Name"?: string;
  "Owner Last Name"?: string;
  "Parent Active Trip Report Id"?: string;
  "Parent Activity Desc"?: string;
  "Parent Activity Id"?: string;
  "Parent Objective Id"?: string;
  "Parent Visit Complete Date"?: string;
  "Parent Visit Date"?: string;
  "Payment Flag"?: string;
  "Payment Id"?: string;
  "Percent Complete"?: string;
  "Personal Location Id"?: string;
  Planned?: string;
  "Planned Completion"?: string;
  Position?: string;
  "Position Id"?: string;
  "Premise Id"?: string;
  "Previous Activity Id"?: string;
  "Price List"?: string;
  "Price List Id"?: string;
  "Primary Address Id"?: string;
  "Primary Attachment Id"?: string;
  "Primary Contact Id"?: string;
  "Primary Owned By"?: string;
  "Primary Owner Id"?: string;
  "Primary Product Detailed Id"?: string;
  "Primary Symptom Code"?: string;
  Priority?: string;
  Private?: string;
  "Program Id"?: string;
  "Program Name"?: string;
  "Project Currency Code"?: string;
  "Project Id"?: string;
  "Project Item Actual End"?: string;
  "Project Item Actual Start"?: string;
  "Project Item Id"?: string;
  "Project Item Name"?: string;
  "Project Item Planned End"?: string;
  "Project Item Planned Start"?: string;
  "Project Name"?: string;
  "Project Number"?: string;
  "Protocol Id"?: string;
  "Protocol Site Id"?: string;
  "Quote Id"?: string;
  "Rate List"?: string;
  "Rate List Id"?: string;
  Region?: string;
  "Region Id"?: string;
  "Repair Id"?: string;
  "Repeat End Series"?: string;
  Repeating?: string;
  "Repeating Expires"?: string;
  "Repeating Type"?: string;
  Required?: string;
  "Resolution Code"?: string;
  "Reviewer Comments"?: string;
  "Risk Id"?: string;
  "S-S Instance"?: string;
  "S-S Instance Id"?: string;
  "S-S Key Id"?: string;
  "SR Number"?: string;
  "SR Status"?: string;
  "Sample Reference Number"?: string;
  "Schedule Excluded"?: string;
  "Serial Number"?: string;
  "Service Location Id"?: string;
  "Service Region"?: string;
  "Service Region Id"?: string;
  "Short Comment"?: string;
  "Signature Captured"?: string;
  "Site Id"?: string;
  Started?: string;
  Status?: string;
  "Subject DOB"?: string;
  "Subject Id"?: string;
  "Subject Initials"?: string;
  "Subject Number"?: string;
  "Suppress Calendar"?: string;
  "System Asgn Flag"?: string;
  "Template Flag"?: string;
  "Template Id"?: string;
  "Test Order Id"?: string;
  "Time Sheet Id"?: string;
  "Time Sheet Line Id"?: string;
  "Time Sheet Number"?: string;
  "Time Sheet Related Flag"?: string;
  "Travel Time Min"?: string;
  Type?: string;
  "Web Collab Session Handle"?: string;
  "Web Collab Start View"?: string;
  "Web Collab Type"?: string;
  "Work Time Min"?: string;
  "WorkItem Id"?: string;
}
function setParam(distObject: any, key: string, param: any) {
  if (param !== undefined) distObject[key] = param;
}

export function createApi(
  axios: AxiosInstance = Axios.create({
    baseURL: "https:://np.api.bayer.com/iris/v1"
  })
): ApiInstance {
  return {
    $axios: axios,
    clinicalProtocol: {
      /**
       *
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }[parameters.searchspec] - Describes additional filtering parameters for the request. used to select the correct study site.
       * @param { string }[parameters.viewMode] - Selects a viewmode to see a specific view
       * @param { number }[parameters.pageSize] - Amount of items to show (maximum of 100)
       */
      getClinicalProtocolClinicalProtocol(parameters, config) {
        let path = `/Clinical Protocol/Clinical Protocol`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, "searchspec", parameters["searchspec"]);
          setParam(queryParams, "ViewMode", parameters["viewMode"]);
          setParam(queryParams, "PageSize", parameters["pageSize"]);
        }

        return axios.request({
          url: path,
          method: "GET",
          params: queryParams,
          data: data,
          ...config
        });
      },

      $getClinicalProtocolClinicalProtocol(parameters, config) {
        return this.getClinicalProtocolClinicalProtocol(
          parameters,
          config
        ).then(res => res && res.data);
      },
      /**
       *
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }parameters.key - Key of a certain study
       * @param { string }[parameters.searchspec] - Describes additional filtering parameters for the request. used to select the correct study site.
       * @param { string }[parameters.viewMode] - Selects a viewmode to see a specific view
       * @param { number }[parameters.pageSize] - Amount of items to show (maximum of 100)
       */ getClinicalProtocolClinicalProtocolByKeyBayStudyParameter(
        parameters,
        config
      ) {
        let path = `/Clinical Protocol/Clinical Protocol/${
          parameters.key
        }/BAY Study Parameter`;
        let queryParams: any = {};
        let data: any = {};

        setParam(queryParams, "searchspec", parameters["searchspec"]);
        setParam(queryParams, "ViewMode", parameters["viewMode"]);
        setParam(queryParams, "PageSize", parameters["pageSize"]);

        return axios.request({
          url: path,
          method: "GET",
          params: queryParams,
          data: data,
          ...config
        });
      },

      $getClinicalProtocolClinicalProtocolByKeyBayStudyParameter(
        parameters,
        config
      ) {
        return this.getClinicalProtocolClinicalProtocolByKeyBayStudyParameter(
          parameters,
          config
        ).then(res => res && res.data);
      }
    },
    clinicalTripReport: {
      /**
       *
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }[parameters.searchspec] - Describes additional filtering parameters for the request. used to select the correct study site.
       * @param { string }[parameters.viewMode] - Selects a viewmode to see a specific view
       * @param { number }[parameters.pageSize] - Amount of items to show (maximum of 100)
       */
      getClinicalTripReportClinicalTripReport(parameters, config) {
        let path = `/Clinical Trip Report/Clinical Trip Report`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, "searchspec", parameters["searchspec"]);
          setParam(queryParams, "ViewMode", parameters["viewMode"]);
          setParam(queryParams, "PageSize", parameters["pageSize"]);
        }

        return axios.request({
          url: path,
          method: "GET",
          params: queryParams,
          data: data,
          ...config
        });
      },

      $getClinicalTripReportClinicalTripReport(parameters, config) {
        return this.getClinicalTripReportClinicalTripReport(
          parameters,
          config
        ).then(res => res && res.data);
      },
      /**
       *
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }parameters.key - References the id via an IRIS internal id
       * @param { string }[parameters.searchspec] - Describes additional filtering parameters for the request.
       * @param { string }[parameters.viewMode] - Selects a viewmode to see a specific view
       */ getClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalTripReport(
        parameters,
        config
      ) {
        let path = `/Clinical Protocol Site/Clinical Protocol Site/${
          parameters.key
        }/Clinical Trip Report`;
        let queryParams: any = {};
        let data: any = {};

        setParam(queryParams, "searchspec", parameters["searchspec"]);
        setParam(queryParams, "ViewMode", parameters["viewMode"]);

        return axios.request({
          url: path,
          method: "GET",
          params: queryParams,
          data: data,
          ...config
        });
      },

      $getClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalTripReport(
        parameters,
        config
      ) {
        return this.getClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalTripReport(
          parameters,
          config
        ).then(res => res && res.data);
      },
      /**
       *
       * @method
       * @param { object } config
       * @param key -  */ putClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalTripReport(
        key,
        config
      ) {
        let path = `/Clinical Protocol Site/Clinical Protocol Site/${key}/Clinical Trip Report`;
        let queryParams: any = {};
        let data: any = {};

        return axios.request({
          url: path,
          method: "PUT",
          params: queryParams,
          data: data,
          ...config
        });
      },

      $putClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalTripReport(
        key,
        config
      ) {
        return this.putClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalTripReport(
          key,
          config
        ).then(res => res && res.data);
      }
    },
    clinicalProtocolSite: {
      /**
       *
       * @method
       * @param { object } config
       * @param searchspec -  */
      getClinicalProtocolSiteClinicalProtocolSite(searchspec, config) {
        let path = `/Clinical Protocol Site/Clinical Protocol Site`;
        let queryParams: any = {};
        let data: any = {};

        setParam(queryParams, "searchspec", searchspec);

        return axios.request({
          url: path,
          method: "GET",
          params: queryParams,
          data: data,
          ...config
        });
      },

      $getClinicalProtocolSiteClinicalProtocolSite(searchspec, config) {
        return this.getClinicalProtocolSiteClinicalProtocolSite(
          searchspec,
          config
        ).then(res => res && res.data);
      },
      /**
       *
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }parameters.key - References the id via an IRIS internal id
       * @param { string }[parameters.searchspec] - Describes additional filtering parameters for the request.
       * @param { string }[parameters.viewMode] - Selects a viewmode to see a specific view
       */ getClinicalProtocolSiteClinicalProtocolSiteByKeyBaySalesAssessment(
        parameters,
        config
      ) {
        let path = `/Clinical Protocol Site/Clinical Protocol Site/${
          parameters.key
        }/BAY Sales Assessment`;
        let queryParams: any = {};
        let data: any = {};

        setParam(queryParams, "searchspec", parameters["searchspec"]);
        setParam(queryParams, "ViewMode", parameters["viewMode"]);

        return axios.request({
          url: path,
          method: "GET",
          params: queryParams,
          data: data,
          ...config
        });
      },

      $getClinicalProtocolSiteClinicalProtocolSiteByKeyBaySalesAssessment(
        parameters,
        config
      ) {
        return this.getClinicalProtocolSiteClinicalProtocolSiteByKeyBaySalesAssessment(
          parameters,
          config
        ).then(res => res && res.data);
      },
      /**
       *
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }parameters.key - References the id via an IRIS internal id
       * @param { string }[parameters.searchspec] - Describes additional filtering parameters for the request.
       * @param { string }[parameters.viewMode] - Selects a viewmode to see a specific view
       * @param { number }[parameters.pageSize] - Amount of items to show (maximum of 100)
       */ getClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalFollowUpSiteLevel(
        parameters,
        config
      ) {
        let path = `/Clinical Protocol Site/Clinical Protocol Site/${
          parameters.key
        }/Clinical Follow Up (Site Level)`;
        let queryParams: any = {};
        let data: any = {};

        setParam(queryParams, "searchspec", parameters["searchspec"]);
        setParam(queryParams, "ViewMode", parameters["viewMode"]);
        setParam(queryParams, "PageSize", parameters["pageSize"]);

        return axios.request({
          url: path,
          method: "GET",
          params: queryParams,
          data: data,
          ...config
        });
      },

      $getClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalFollowUpSiteLevel(
        parameters,
        config
      ) {
        return this.getClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalFollowUpSiteLevel(
          parameters,
          config
        ).then(res => res && res.data);
      }
    }
  };
}

interface Core {
  $axios: AxiosInstance;
}

interface clinicalProtocolResource {
  getClinicalProtocolClinicalProtocol(
    parameters?: {
      searchspec?: string;
      viewMode?: string;
      pageSize?: number;
    },
    config?: AxiosRequestConfig
  ): AxiosPromise<ClinicalProtocol>;
  $getClinicalProtocolClinicalProtocol(
    parameters?: {
      searchspec?: string;
      viewMode?: string;
      pageSize?: number;
    },
    config?: AxiosRequestConfig
  ): Promise<ClinicalProtocol>;
  getClinicalProtocolClinicalProtocolByKeyBayStudyParameter(
    parameters: {
      key: string;
      searchspec?: string;
      viewMode?: string;
      pageSize?: number;
    },
    config?: AxiosRequestConfig
  ): AxiosPromise<BAYStudyParameter>;
  $getClinicalProtocolClinicalProtocolByKeyBayStudyParameter(
    parameters: {
      key: string;
      searchspec?: string;
      viewMode?: string;
      pageSize?: number;
    },
    config?: AxiosRequestConfig
  ): Promise<BAYStudyParameter>;
}
interface clinicalTripReportResource {
  getClinicalTripReportClinicalTripReport(
    parameters?: {
      searchspec?: string;
      viewMode?: string;
      pageSize?: number;
    },
    config?: AxiosRequestConfig
  ): AxiosPromise<ClinicalTripReport>;
  $getClinicalTripReportClinicalTripReport(
    parameters?: {
      searchspec?: string;
      viewMode?: string;
      pageSize?: number;
    },
    config?: AxiosRequestConfig
  ): Promise<ClinicalTripReport>;
  getClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalTripReport(
    parameters: {
      key: string;
      searchspec?: string;
      viewMode?: string;
    },
    config?: AxiosRequestConfig
  ): AxiosPromise<ClinicalTripReport>;
  $getClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalTripReport(
    parameters: {
      key: string;
      searchspec?: string;
      viewMode?: string;
    },
    config?: AxiosRequestConfig
  ): Promise<ClinicalTripReport>;
  putClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalTripReport(
    key: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<{ id?: string }>;
  $putClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalTripReport(
    key: string,
    config?: AxiosRequestConfig
  ): Promise<{ id?: string }>;
}
interface clinicalProtocolSiteResource {
  getClinicalProtocolSiteClinicalProtocolSite(
    searchspec?: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<ClinicalProtocolSite>;
  $getClinicalProtocolSiteClinicalProtocolSite(
    searchspec?: string,
    config?: AxiosRequestConfig
  ): Promise<ClinicalProtocolSite>;
  getClinicalProtocolSiteClinicalProtocolSiteByKeyBaySalesAssessment(
    parameters: {
      key: string;
      searchspec?: string;
      viewMode?: string;
    },
    config?: AxiosRequestConfig
  ): AxiosPromise<BAYSalesAssessment>;
  $getClinicalProtocolSiteClinicalProtocolSiteByKeyBaySalesAssessment(
    parameters: {
      key: string;
      searchspec?: string;
      viewMode?: string;
    },
    config?: AxiosRequestConfig
  ): Promise<BAYSalesAssessment>;
  getClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalFollowUpSiteLevel(
    parameters: {
      key: string;
      searchspec?: string;
      viewMode?: string;
      pageSize?: number;
    },
    config?: AxiosRequestConfig
  ): AxiosPromise<ClinicalFollowUpSiteLevel>;
  $getClinicalProtocolSiteClinicalProtocolSiteByKeyClinicalFollowUpSiteLevel(
    parameters: {
      key: string;
      searchspec?: string;
      viewMode?: string;
      pageSize?: number;
    },
    config?: AxiosRequestConfig
  ): Promise<ClinicalFollowUpSiteLevel>;
}

export interface ApiInstance extends Core {
  clinicalProtocol: clinicalProtocolResource;
  clinicalTripReport: clinicalTripReportResource;
  clinicalProtocolSite: clinicalProtocolSiteResource;
}
