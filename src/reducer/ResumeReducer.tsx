// src/reducer/ResumeReducer.ts

export const ResumeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_JOB_DESCRIPTION":
      return {
        ...state,
        jobDescription: action.payload,
      };

    case "UPDATE_PERSONAL_INFO":
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          [action.payload.field]: action.payload.value,
        },
      };

    case "SET_SKILLS":
      return {
        ...state,
        skills: action.payload,
      };

    case "UPDATE_EXPERIENCE": {
      const { index, field, value } = action.payload;

      const updatedExperience = [...state.experience];

      // Create object if it doesn't exist
      if (!updatedExperience[index]) {
        updatedExperience[index] = {
          companyName: "",
          role: "",
          duration: "",
          description: "",
        };
      }

      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: value,
      };

      return {
        ...state,
        experience: updatedExperience,
      };
    }

    case "UPDATE_PROJECT": {
      const { index, field, value } = action.payload;

      const updatedProjects = [...state.projects];

      // Create object if it doesn't exist
      if (!updatedProjects[index]) {
        updatedProjects[index] = {
          projectName: "",
          technologies: "",
          projectDetails: "",
        };
      }

      updatedProjects[index] = {
        ...updatedProjects[index],
        [field]: value,
      };

      return {
        ...state,
        projects: updatedProjects,
      };
    }

    case "UPDATE_EDUCATION": {
      const { index, field, value } = action.payload;

      const updatedEducation = [...state.educations];

      // Create object if it doesn't exist
      if (!updatedEducation[index]) {
        updatedEducation[index] = {
          degree: "",
          institution: "",
          year: "",
          grade: "",
        };
      }

      updatedEducation[index] = {
        ...updatedEducation[index],
        [field]: value,
      };

      return {
        ...state,
        educations: updatedEducation,
      };
    }

    case "SET_ACHIEVEMENTS":
      return {
        ...state,
        achievements: action.payload,
      };

    case "UPDATE_CERTIFICATION": {
      const { index, field, value } = action.payload;

      const updatedCertifications = [...state.certifications];

      // Create object if it doesn't exist
      if (!updatedCertifications[index]) {
        updatedCertifications[index] = {
          certificateName: "",
          certificateProvider: "",
        };
      }

      updatedCertifications[index] = {
        ...updatedCertifications[index],
        [field]: value,
      };

      return {
        ...state,
        certifications: updatedCertifications,
      };
    }

    default:
      return state;
  }
};
