import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import Assessments from "@/pages/Assessments.vue";
import DataInventory from "@/pages/DataInventory.vue";
import RiskRegister from "@/pages/RiskRegister.vue";
import DataFlow from "@/pages/DataFlow";
import Settings from "@/pages/Settings.vue";
import Dpia from "@/pages/Forms/Dpia.vue";
import AssessmentDetail from "@/pages/Details/AssessmentDetail";

import ScreeningDetail from "@/pages/Forms/Screening.vue";
import ContextDetail from "@/pages/Forms/Context.vue";
import PrincipleDetail from "@/pages/Forms/Principle.vue";
import DataProtectionDetail from "@/pages/Forms/DataProtection.vue";
import RightsOfSubjectDetail from "@/pages/Forms/RightsOfSubject.vue";
import PrivacyRisksDetail from "@/pages/Forms/PrivacyRisks.vue";
import LikelihoodImpactDetail from "@/pages/Forms/LikelihoodImpact.vue";

const routes = [{
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [{
                path: "dashboard",
                name: "dashboard",
                component: Dashboard
            },
            {
                path: "assessments",
                name: "assessments",
                component: Assessments
            },
            {
                path: "data-inventory",
                name: "data inventory",
                component: DataInventory
            },
            {
                path: "risk-register",
                name: "risk register",
                component: RiskRegister
            },
            {
                path: "data-flow",
                name: "data flow",
                component: DataFlow
            },
            {
                path: "settings",
                name: "settings",
                component: Settings
            },
            {
                path: "add/dpia",
                name: "dpia",
                component: Dpia
            },
            {
                path: "assessment/:ref",
                name: "assessment detail",
                component: AssessmentDetail
            },
            {
                path: "assessment/screening/:ref",
                name: "screening questions",
                component: ScreeningDetail
            },
            {
                path: "assessment/context/:ref",
                name: "context questions",
                component: ContextDetail
            },
            {
                path: "assessment/principle/:ref",
                name: "principle questions",
                component: PrincipleDetail
            },
            {
                path: "assessment/data-protection/:ref",
                name: "data protection",
                component: DataProtectionDetail
            },
            {
                path: "assessment/rights/:ref",
                name: "rights of data subject",
                component: RightsOfSubjectDetail
            },
            {
                path: "assessment/privacy/:ref",
                name: "privacy risks",
                component: PrivacyRisksDetail
            },
            {
                path: "assessment/likelihood/:ref",
                name: "likelihood impact",
                component: LikelihoodImpactDetail
            },
        ]
    },
    { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;