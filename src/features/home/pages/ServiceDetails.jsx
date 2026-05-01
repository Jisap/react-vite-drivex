import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { services } from "../data/services"
import { Check, Mail, MapPin, Phone } from "lucide-react"
import Button from "../../../shared/components/Button"
import PageBanner from "../../../shared/ui/PageBanner"



const ServiceDetails = () => {

  const { id } = useParams();

  const service = services.find((service) => service.id === Number(id));
  if (!service) return <p>Service not found</p>

  return (
    <>
      <PageBanner
        title="Service Details"
        currentPage="Service Details"
        productName={service.title}
      />
    </>
  )
}

export default ServiceDetails