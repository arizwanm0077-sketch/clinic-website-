'use client';

import React, { useState } from "react";
import { 
  Container, 
  Section, 
  Stack, 
  Heading, 
  BodyText, 
  Button, 
  Card,
  CardContent,
  Eyebrow,
  Grid,
  ResponsiveMedia
} from "@/components/primitives";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Calendar, 
  Clock, 
  User, 
  FileText, 
  Sparkles,
  RefreshCw,
  Phone,
  Mail,
  AlertCircle
} from "lucide-react";
import { doctorsData, concernsData, treatmentsData } from "@/config/demoData";
import { motion, AnimatePresence } from "motion/react";

type BookingStep = "concern" | "treatment" | "doctor" | "details" | "review" | "success";

interface BookingFormState {
  concernId: string;
  treatmentId: string;
  doctorId: string;
  name: string;
  phone: string;
  email: string;
  preferredPeriod: string;
  consentAccepted: boolean;
}

const initialFormState: BookingFormState = {
  concernId: "",
  treatmentId: "",
  doctorId: "",
  name: "",
  phone: "",
  email: "",
  preferredPeriod: "",
  consentAccepted: false,
};

export default function BookingPage() {
  const [step, setStep] = useState<BookingStep>("concern");
  const [formData, setFormData] = useState<BookingFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [referenceNumber] = useState(() => Math.floor(1000 + Math.random() * 9000));

  const handleSelectConcern = (id: string) => {
    setFormData(prev => ({ 
      ...prev, 
      concernId: id,
      // Reset dependent treatment if any
      treatmentId: "" 
    }));
    setValidationError(null);
    setStep("treatment");
  };

  const handleSelectTreatment = (id: string) => {
    setFormData(prev => ({ ...prev, treatmentId: id }));
    setValidationError(null);
    setStep("doctor");
  };

  const handleSelectDoctor = (id: string) => {
    setFormData(prev => ({ ...prev, doctorId: id }));
    setStep("details");
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setValidationError("Please enter your name");
      return;
    }
    if (!formData.phone.trim()) {
      setValidationError("Please enter your telephone number");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setValidationError("Please enter a valid email address");
      return;
    }
    if (!formData.preferredPeriod) {
      setValidationError("Please select your preferred appointment period");
      return;
    }
    if (!formData.consentAccepted) {
      setValidationError("Please accept the consultation consent policy to continue.");
      return;
    }
    setValidationError(null);
    setStep("review");
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setStep("success");
  };

  const resetBooking = () => {
    setFormData(initialFormState);
    setValidationError(null);
    setStep("concern");
  };

  const getSelectedConcernName = () => {
    if (formData.concernId === "unsure") return "I am not sure / Unsure";
    const found = concernsData.find(c => c.id === formData.concernId);
    return found ? found.title : "Not specified";
  };

  const getSelectedTreatmentName = () => {
    if (formData.treatmentId === "unsure") return "I'm not sure / Diagnostic consult";
    const found = treatmentsData.find(t => t.id === formData.treatmentId);
    return found ? found.title : "Not specified";
  };

  const getSelectedDoctorName = () => {
    if (formData.doctorId === "none") return "No preference (Assigned dermatologist)";
    const found = doctorsData.find(d => d.id === formData.doctorId);
    return found ? found.name : "Not specified";
  };

  return (
    <Section spacing="hero" surface="ivory" className="min-h-[85vh] flex flex-col justify-center">
      <Container size="narrow">
        {/* Progress indicators for layout */}
        {step !== "success" && (
          <div className="flex items-center justify-between mb-12 max-w-md mx-auto px-4">
            {[
              { id: "concern", label: "Concern" },
              { id: "treatment", label: "Treatment" },
              { id: "doctor", label: "Doctor" },
              { id: "details", label: "Details" },
              { id: "review", label: "Review" }
            ].map((s, idx, arr) => {
              const stepsOrder = ["concern", "treatment", "doctor", "details", "review"];
              const currentIndex = stepsOrder.indexOf(step);
              const stepIndex = stepsOrder.indexOf(s.id);
              const isActive = step === s.id;
              const isCompleted = stepIndex < currentIndex;

              return (
                <React.Fragment key={s.id}>
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono border transition-all ${
                        isActive 
                          ? "bg-brand-green-deep text-white border-brand-green-deep" 
                          : isCompleted
                            ? "bg-brand-sage text-white border-brand-sage"
                            : "bg-white text-brand-text-muted border-brand-stone"
                      }`}
                    >
                      {isCompleted ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                    </div>
                    <span className="text-[9px] uppercase tracking-wider font-mono text-brand-text-muted mt-2 hidden sm:block">
                      {s.label}
                    </span>
                  </div>
                  {idx < arr.length - 1 && (
                    <div 
                      className={`flex-1 h-[1px] mx-2 transition-all ${
                        stepIndex < currentIndex ? "bg-brand-sage" : "bg-brand-stone/60"
                      }`} 
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* STEP 1: CONCERN */}
          {step === "concern" && (
            <motion.div
              key="concern"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-center mb-8">
                <Eyebrow>Step 01</Eyebrow>
                <Heading level={1} size="lg" className="mt-2">What is your primary concern?</Heading>
                <BodyText muted className="mt-2">
                  Select a clinical concern to help our specialists prepare for your session.
                </BodyText>
              </div>

              <Stack gap="md" className="max-w-md mx-auto">
                {concernsData.map((concern) => (
                  <button
                    key={concern.id}
                    onClick={() => handleSelectConcern(concern.id)}
                    className="w-full text-left p-6 bg-white border border-brand-stone rounded-sm hover:border-brand-sand hover:shadow-md transition-all flex items-start justify-between group focus-visible:ring-2 focus-visible:ring-brand-sage"
                  >
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-mono text-brand-sage-dark mb-1 block">
                        {concern.category}
                      </span>
                      <span className="font-serif text-base font-medium text-brand-green-deep group-hover:text-brand-sage-dark block">
                        {concern.title}
                      </span>
                      <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                        {concern.shortDescription}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-text-muted group-hover:text-brand-sage group-hover:translate-x-1 transition-all shrink-0 ml-4 mt-1" />
                  </button>
                ))}

                <button
                  onClick={() => handleSelectConcern("unsure")}
                  className="w-full text-left p-6 bg-brand-stone/10 border border-brand-stone/60 border-dashed rounded-sm hover:border-brand-sand hover:bg-white transition-all flex items-start justify-between group focus-visible:ring-2 focus-visible:ring-brand-sage"
                >
                  <div>
                    <span className="font-serif text-base font-medium text-brand-green-deep block">
                      I am not sure / General diagnostic
                    </span>
                    <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                      Choose this if you want a complete specialist-guided baseline evaluation.
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-text-muted group-hover:text-brand-sage group-hover:translate-x-1 transition-all shrink-0 ml-4 mt-1" />
                </button>
              </Stack>
            </motion.div>
          )}

          {/* STEP 2: TREATMENT */}
          {step === "treatment" && (
            <motion.div
              key="treatment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-center mb-8">
                <button 
                  onClick={() => setStep("concern")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-text-muted hover:text-brand-sage transition-colors mb-4"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to concerns
                </button>
                <Eyebrow>Step 02</Eyebrow>
                <Heading level={2} size="lg" className="mt-2">Is there a specific treatment in mind?</Heading>
                <BodyText muted className="mt-2">
                  Select a targeted therapy or start with an open diagnostic consultation.
                </BodyText>
              </div>

              <Stack gap="md" className="max-w-md mx-auto">
                {formData.concernId !== "unsure" ? (
                  // Recommend treatments based on selected concern
                  treatmentsData
                    .filter(t => {
                      const concern = concernsData.find(c => c.id === formData.concernId);
                      return concern?.recommendedTreatments.includes(t.id);
                    })
                    .map((t) => (
                      <button
                        key={t.id}
                        onClick={() => handleSelectTreatment(t.id)}
                        className="w-full text-left p-6 bg-white border border-brand-stone rounded-sm hover:border-brand-sand hover:shadow-md transition-all flex items-start justify-between group focus-visible:ring-2 focus-visible:ring-brand-sage"
                      >
                        <div>
                          <span className="text-[9px] uppercase tracking-widest font-mono text-brand-sage-dark mb-1 block">
                            Recommended for your concern
                          </span>
                          <span className="font-serif text-base font-medium text-brand-green-deep block">
                            {t.title}
                          </span>
                          <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                            {t.shortDescription}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-brand-text-muted group-hover:text-brand-sage shrink-0 ml-4 mt-1" />
                      </button>
                    ))
                ) : null}

                {/* Always show "General Consult" and remaining treatments list */}
                <button
                  onClick={() => handleSelectTreatment("unsure")}
                  className="w-full text-left p-6 bg-brand-stone/10 border border-brand-stone/60 border-dashed rounded-sm hover:border-brand-sand hover:bg-white transition-all flex items-start justify-between group focus-visible:ring-2 focus-visible:ring-brand-sage"
                >
                  <div>
                    <span className="font-serif text-base font-medium text-brand-green-deep block">
                      I&apos;m not sure / Open diagnostic consult
                    </span>
                    <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                      Our dermatologists will assess and recommend the safest options for you.
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-text-muted group-hover:text-brand-sage shrink-0 ml-4 mt-1" />
                </button>

                {/* Collapsible remaining treatments */}
                <div className="pt-4 mt-2 border-t border-brand-stone/30 text-center">
                  <span className="text-xs text-brand-text-muted block mb-4">Other clinic procedures:</span>
                  <div className="grid grid-cols-1 gap-2 text-left">
                    {treatmentsData
                      .filter(t => {
                        const concern = concernsData.find(c => c.id === formData.concernId);
                        return !concern?.recommendedTreatments.includes(t.id);
                      })
                      .map((t) => (
                        <button
                          key={t.id}
                          onClick={() => handleSelectTreatment(t.id)}
                          className="w-full text-left p-4 bg-white border border-brand-stone/40 rounded-sm hover:border-brand-sand text-xs text-brand-green-deep transition-all"
                        >
                          {t.title}
                        </button>
                      ))}
                  </div>
                </div>
              </Stack>
            </motion.div>
          )}

          {/* STEP 3: DOCTOR */}
          {step === "doctor" && (
            <motion.div
              key="doctor"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-center mb-8">
                <button 
                  onClick={() => setStep("treatment")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-text-muted hover:text-brand-sage transition-colors mb-4"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to treatments
                </button>
                <Eyebrow>Step 03</Eyebrow>
                <Heading level={2} size="lg" className="mt-2">Choose your specialist</Heading>
                <BodyText muted className="mt-2">
                  Select a consulting dermatologist or allow us to assign the most suitable.
                </BodyText>
              </div>

              <Grid cols={3} gap="md" className="max-w-2xl mx-auto">
                {doctorsData.map((doc) => (
                  <Card 
                    key={doc.id} 
                    surface="white" 
                    className="border border-brand-stone p-6 flex flex-col justify-between text-center relative hover:border-brand-sand transition-all group cursor-pointer"
                    onClick={() => handleSelectDoctor(doc.id)}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-brand-stone/20 overflow-hidden mb-4 relative">
                        <ResponsiveMedia 
                          src={doc.image} 
                          alt={doc.name} 
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105" 
                        />
                      </div>
                      <Heading level={3} size="xs" className="mb-1 text-brand-green-deep">
                        {doc.name}
                      </Heading>
                      <span className="text-[10px] tracking-wider font-mono text-brand-text-muted uppercase block">
                        {doc.role}
                      </span>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-brand-stone/30">
                      <Button as="button" type="button" variant="quiet" className="text-xs group-hover:text-brand-sage-dark">
                        Select dermatologist
                      </Button>
                    </div>
                  </Card>
                ))}

                <Card 
                  surface="white" 
                  className="border border-brand-stone/60 border-dashed p-6 flex flex-col justify-between text-center cursor-pointer hover:bg-brand-stone/10 transition-all group"
                  onClick={() => handleSelectDoctor("none")}
                >
                  <div className="flex flex-col items-center justify-center h-full py-4">
                    <div className="w-16 h-16 rounded-full bg-brand-stone/30 flex items-center justify-center mb-4 text-brand-text-muted">
                      <Sparkles className="w-6 h-6 opacity-60" />
                    </div>
                    <Heading level={3} size="xs" className="mb-1 text-brand-green-deep">
                      No preference
                    </Heading>
                    <span className="text-[10px] tracking-wider font-mono text-brand-text-muted uppercase block">
                      Assigned by clinic
                    </span>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-brand-stone/30">
                    <Button as="button" type="button" variant="quiet" className="text-xs">
                      Assign first available
                    </Button>
                  </div>
                </Card>
              </Grid>
            </motion.div>
          )}

          {/* STEP 4: DETAILS */}
          {step === "details" && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-center mb-8">
                <button 
                  onClick={() => setStep("doctor")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-text-muted hover:text-brand-sage transition-colors mb-4"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to specialists
                </button>
                <Eyebrow>Step 04</Eyebrow>
                <Heading level={2} size="lg" className="mt-2">Contact & details</Heading>
                <BodyText muted className="mt-2">
                  Please provide your details so our care coordinators can reach you.
                </BodyText>
              </div>

              <Card surface="white" className="max-w-md mx-auto border border-brand-stone/60 p-8">
                <form onSubmit={handleDetailsSubmit} className="space-y-6">
                  {validationError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-800 text-xs flex gap-2 items-start" role="alert">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-brand-text-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-brand-ivory border border-brand-stone rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-brand-text-muted mb-2">
                        Telephone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 99000 00000"
                        className="w-full px-4 py-3 bg-brand-ivory border border-brand-stone rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-brand-text-muted mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 bg-brand-ivory border border-brand-stone rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-brand-text-muted mb-2">
                      Preferred Appointment Period *
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        "Morning (10 AM - 1 PM)",
                        "Afternoon (1 PM - 4 PM)",
                        "Evening (4 PM - 7 PM)"
                      ].map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, preferredPeriod: p }))}
                          className={`p-3 border rounded-sm text-xs text-center transition-all ${
                            formData.preferredPeriod === p
                              ? "bg-brand-green-deep text-white border-brand-green-deep"
                              : "bg-brand-ivory text-brand-text-main border-brand-stone hover:border-brand-sand"
                          }`}
                        >
                          {p.split(" ")[0]}
                          <span className="block opacity-60 text-[10px] mt-0.5">{p.slice(p.indexOf("("))}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-4 border-t border-brand-stone/30">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consentAccepted}
                      onChange={(e) => setFormData(prev => ({ ...prev, consentAccepted: e.target.checked }))}
                      className="mt-1 w-4 h-4 text-brand-sage focus:ring-brand-sage border-brand-stone rounded-sm"
                    />
                    <label htmlFor="consent" className="text-xs text-brand-text-muted leading-relaxed cursor-pointer select-none">
                      I consent to Aurevia Clinic contacting me via phone, email, or WhatsApp to confirm appointment details and discuss clinical pathways. *
                    </label>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" variant="primary" className="w-full">
                      Continue to review
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          )}

          {/* STEP 5: REVIEW */}
          {step === "review" && (
            <motion.div
              key="review"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-center mb-8">
                <button 
                  onClick={() => setStep("details")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-text-muted hover:text-brand-sage transition-colors mb-4"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to details
                </button>
                <Eyebrow>Step 05</Eyebrow>
                <Heading level={2} size="lg" className="mt-2">Review consultation request</Heading>
                <BodyText muted className="mt-2">
                  Please review your details before requesting a clinical slot.
                </BodyText>
              </div>

              <Card surface="white" className="max-w-md mx-auto border border-brand-stone/60 p-8 space-y-6">
                <Stack gap="md" className="divide-y divide-brand-stone/30">
                  <div className="pb-4">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block mb-1">Dermatology Concern</span>
                    <span className="text-sm font-medium text-brand-green-deep">{getSelectedConcernName()}</span>
                  </div>

                  <div className="py-4">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block mb-1">Requested Treatment</span>
                    <span className="text-sm font-medium text-brand-green-deep">{getSelectedTreatmentName()}</span>
                  </div>

                  <div className="py-4">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block mb-1">Consulting Specialist</span>
                    <span className="text-sm font-medium text-brand-green-deep">{getSelectedDoctorName()}</span>
                  </div>

                  <div className="py-4 space-y-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block">Patient Details</span>
                      <span className="text-sm font-medium text-brand-green-deep">{formData.name}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-brand-text-muted">
                      <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {formData.phone}</span>
                      <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {formData.email}</span>
                    </div>
                  </div>

                  <div className="py-4">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text-muted block mb-1">Preferred Time Frame</span>
                    <span className="text-sm font-medium text-brand-green-deep flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-sage" /> {formData.preferredPeriod}
                    </span>
                  </div>
                </Stack>

                <div className="pt-6 border-t border-brand-stone/40">
                  <Button 
                    onClick={handleFinalSubmit} 
                    variant="primary" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Transmitting request..." : "Request consultation"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* STEP 6: SUCCESS */}
          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <Card surface="white" className="max-w-md mx-auto border border-brand-stone/60 p-8 md:p-12 shadow-md">
                <div className="w-16 h-16 rounded-full bg-brand-sage/10 text-brand-sage-dark flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8" />
                </div>
                
                <Heading level={1} size="lg" className="mb-4">
                  Your consultation request has been received.
                </Heading>
                
                <BodyText muted size="md" className="leading-relaxed mb-6">
                  A member of the clinic team would contact you to confirm availability and the most suitable consultation option. This demonstration does not create a real appointment.
                </BodyText>

                <div className="p-4 bg-brand-stone/10 border border-brand-stone/50 rounded-sm text-left mb-8">
                  <span className="text-[9px] font-mono tracking-wider text-brand-text-muted uppercase block mb-1">Demonstration Metadata</span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-brand-text-muted block text-[10px]">Reference</span>
                      <span className="font-medium text-brand-green-deep">AUR-{referenceNumber}</span>
                    </div>
                    <div>
                      <span className="text-brand-text-muted block text-[10px]">Status</span>
                      <span className="font-medium text-brand-green-deep">Demo Mode</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button as="link" href="/" variant="primary" className="w-full">
                    Return to home page
                  </Button>
                  <button 
                    onClick={resetBooking}
                    className="flex items-center justify-center gap-1.5 text-xs font-mono text-brand-text-muted hover:text-brand-sage transition-colors py-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Start new booking demo
                  </button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
