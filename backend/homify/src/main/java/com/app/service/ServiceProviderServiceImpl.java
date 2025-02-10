package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.ProviderDTO;
import com.app.dao.ServiceproviderDao;
import com.app.entities.Feedback;
import com.app.entities.ServiceProvider;

import jakarta.transaction.Transactional;


@Service
public class ServiceProviderServiceImpl implements ServiceProviderservice {

    @Autowired
    private ServiceproviderDao sp;

    @Override
    public List<ProviderDTO> getAllServiceProvider() {
        List<ServiceProvider> serviceProviders = sp.findAll();
        List<ProviderDTO> providerDTOList = new ArrayList<>();  // ✅ List to store DTOs

        // ✅ Loop through each ServiceProvider and convert it into ProviderDTO
        for (ServiceProvider sp : serviceProviders) {
            ProviderDTO providerDTO = new ProviderDTO();
            providerDTO.setId(sp.getId());

            providerDTO.setCreatedOn(sp.getCreatedOn());
            providerDTO.setUpdatedOn(sp.getUpdatedOn());

            
//            if (sp.getUser() != null) {
//                providerDTO.setSpname(sp.getUser().getName());  
//                providerDTO.setPhoneno(sp.getUser().getPhone_no());  
//            }

            if (sp.getUser() != null) {
                providerDTO.setSpname(sp.getUser().getName());
                providerDTO.setPhoneno(sp.getUser().getPhone_no());

            } else {
                System.out.println("User is NULL for ServiceProvider ID: " + sp.getId());
            }
            
            providerDTO.setEarnings(sp.getEarnings());

          
            double avgRating = 0;
            List<Feedback> feedbacks = sp.getFeedbacks();
            if (feedbacks != null && !feedbacks.isEmpty()) {
                int totalRating = 0;
                for (Feedback feedback : feedbacks) {
                    totalRating += feedback.getRating();
                }
                avgRating = (double) totalRating / feedbacks.size();  // ✅ Floating-point division
            }
            providerDTO.setRating(avgRating);

            providerDTOList.add(providerDTO); // ✅ Add DTO to the list
        }

        return providerDTOList; // ✅ Return the DTO list
    }
}
